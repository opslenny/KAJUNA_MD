import pkg from 'baileys';
import { useMultiFileAuthState, DisconnectReason } from 'baileys';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { default: makeWASocket } = pkg;

let sock = null;
let qrCode = null;

async function connectWhatsApp(sessionPath) {
  try {
    const { state, saveCreds } = await useMultiFileAuthState(sessionPath);

    sock = makeWASocket({
      auth: state,
      printQRInTerminal: false
    });

    sock.ev.on('connection.update', (update) => {
      const { connection, lastDisconnect, qr } = update;
      
      if (qr) {
        qrCode = qr;
      }

      if (connection === 'open') {
        console.log('WhatsApp Connected');
      } else if (connection === 'close') {
        sock = null;
      }
    });

    sock.ev.on('messages.upsert', async (m) => {
      const message = m.messages[0];
      if (!message.message) return;

      const from = message.key.remoteJid;
      const text = message.message.conversation || message.message.extendedTextMessage?.text || '';

      if (text.toLowerCase().includes('ping')) {
        await sock.sendMessage(from, { text: 'Pong! 🏓' });
      }
    });

    sock.ev.on('creds.update', saveCreds);

  } catch (error) {
    console.error('Connection Error:', error);
  }
}

export default async function handler(req, res) {
  const sessionPath = path.join(__dirname, '..', 'src', 'Session');
  await fs.ensureDir(sessionPath);

  if (req.method === 'GET') {
    const action = req.query.action;

    if (action === 'status') {
      if (!sock) {
        return res.status(200).json({
          status: 'Disconnected',
          message: 'Please scan QR code to connect'
        });
      }

      const jid = sock.user?.id;
      return res.status(200).json({
        status: 'Connected',
        user: jid ? jid.split(':')[0] : 'Unknown'
      });
    }

    if (action === 'qr') {
      if (!qrCode) {
        await connectWhatsApp(sessionPath);
        return res.status(200).json({
          qr: qrCode || null,
          message: 'Generating QR code...'
        });
      }
      return res.status(200).json({ qr: qrCode });
    }

    if (action === 'init') {
      await connectWhatsApp(sessionPath);
      return res.status(200).json({ message: 'Bot initialized' });
    }

    return res.status(200).json({
      name: 'KAJUNA_MD Bot',
      version: '1.0.0',
      status: sock ? 'Connected' : 'Disconnected'
    });
  }

  if (req.method === 'POST') {
    const { phone, message } = req.body;

    if (!phone || !message) {
      return res.status(400).json({ error: 'Phone and message required' });
    }

    if (!sock) {
      await connectWhatsApp(sessionPath);
    }

    if (!sock) {
      return res.status(500).json({ error: 'Bot not connected' });
    }

    try {
      const jid = phone.includes('@') ? phone : `${phone}@s.whatsapp.net`;
      await sock.sendMessage(jid, { text: message });
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.status(405).json({ error: 'Method not allowed' });
}
