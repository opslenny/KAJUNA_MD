import pkg from 'baileys';
import pino from 'pino';
import path from 'path';
import fs from 'fs-extra';
import express from 'express';
import dotenv from 'dotenv';

const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, isJidBroadcast } = pkg;

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Logger setup
const logger = pino({
  timestamp: pino.stdTimeFunctions.isoTime
});

// Session directory
const SESSION_ID = 'KAJUNA_MD_SESSION';
const sessionsDir = path.join(process.cwd(), 'src', 'Session');

// Ensure session directory exists
await fs.ensureDir(sessionsDir);

let sock = null;
let qrCode = null;

async function connectWhatsApp() {
  try {
    const { state, saveCreds } = await useMultiFileAuthState(sessionsDir);

    sock = makeWASocket({
      auth: state,
      logger: logger,
      printQRInTerminal: true,
      browser: ['KAJUNA_MD', 'Safari', '1.0.0']
    });

    // Handle QR Code
    sock.ev.on('connection.update', (update) => {
      const { connection, lastDisconnect, qr } = update;
      
      if (qr) {
        qrCode = qr;
        console.log('📱 Scan QR Code above to connect WhatsApp');
      }

      if (connection === 'open') {
        console.log('✅ WhatsApp Connected!');
        qrCode = null;
      } else if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
        if (reason === DisconnectReason.badSession) {
          console.log('Bad Session File, Please Delete Session and Scan Again');
          fs.removeSync(sessionsDir);
        } else if (reason === DisconnectReason.connectionClosed) {
          console.log('Connection closed, reconnecting...');
          connectWhatsApp();
        } else if (reason === DisconnectReason.connectionLost) {
          console.log('Connection Lost from Server, reconnecting...');
          connectWhatsApp();
        } else if (reason === DisconnectReason.connectionReplaced) {
          console.log('Connection Replaced, Another New Session Opened');
        } else if (reason === DisconnectReason.loggedOut) {
          console.log('Logged out, Please Scan Again and Run.');
          fs.removeSync(sessionsDir);
        } else if (reason === DisconnectReason.restartRequired) {
          console.log('Restart Required, Restarting...');
          connectWhatsApp();
        } else if (reason === DisconnectReason.timedOut) {
          console.log('Connection TimedOut, Reconnecting...');
          connectWhatsApp();
        }
      }
    });

    // Handle messages
    sock.ev.on('messages.upsert', async (m) => {
      const message = m.messages[0];
      if (!message.message) return;

      const from = message.key.remoteJid;
      const isGroup = from.endsWith('@g.us');
      const isQuoted = !!message.message.extendedTextMessage?.contextInfo?.quotedMessage;
      const text = message.message.conversation || message.message.extendedTextMessage?.text || '';

      console.log(`📨 Message from ${from}: ${text}`);

      // Simple auto-reply for testing
      if (text.toLowerCase().includes('hello')) {
        await sock.sendMessage(from, { text: 'Hello! 👋 Welcome to KAJUNA_MD Bot' });
      }

      if (text.toLowerCase().includes('ping')) {
        await sock.sendMessage(from, { text: 'Pong! 🏓' });
      }
    });

    // Save credentials
    sock.ev.on('creds.update', saveCreds);

  } catch (error) {
    console.error('Connection Error:', error);
    setTimeout(connectWhatsApp, 5000);
  }
}

// Express Routes
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    name: 'KAJUNA_MD Bot',
    version: '1.0.0',
    status: sock ? 'Connected' : 'Disconnected'
  });
});

app.get('/qr', (req, res) => {
  if (!qrCode) {
    return res.json({ qr: null, message: 'Already connected or generating QR...' });
  }
  res.json({ qr: qrCode });
});

app.get('/status', (req, res) => {
  if (!sock) {
    return res.json({ status: 'Disconnected', message: 'Bot is not connected' });
  }
  
  const jid = sock.user?.id;
  res.json({
    status: 'Connected',
    user: jid ? jid.split(':')[0] : 'Unknown'
  });
});

app.post('/send-message', async (req, res) => {
  const { phone, message } = req.body;

  if (!phone || !message) {
    return res.status(400).json({ error: 'Phone number and message are required' });
  }

  if (!sock) {
    return res.status(500).json({ error: 'Bot is not connected' });
  }

  try {
    const jid = phone.includes('@') ? phone : `${phone}@s.whatsapp.net`;
    await sock.sendMessage(jid, { text: message });
    res.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 KAJUNA_MD Server running on port ${port}`);
  connectWhatsApp();
});

export default app;
