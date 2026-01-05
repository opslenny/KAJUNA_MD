# KAJUNA_MD WhatsApp Bot

A powerful WhatsApp bot built with Baileys and deployed on Vercel. This bot can handle messages, process commands, and integrate with various APIs.

## Features

- ✅ WhatsApp Web Integration (Baileys)
- ✅ Command Processing with Prefix System
- ✅ Message Auto-Reply
- ✅ Database Integration (MongoDB)
- ✅ Plugin System
- ✅ Vercel Deployment Ready
- ✅ AI Chat Integration
- ✅ Media Download Support
- ✅ Group Management

## Prerequisites

- Node.js 16+ 
- npm or yarn
- Vercel Account (for deployment)
- WhatsApp Business Account (recommended)
- MongoDB Atlas Account (optional)

## Installation

### 1. Clone and Install Dependencies

```bash
cd KAJUNA_MD
npm install
```

### 2. Create `.env` File

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

```env
WHATSAPP_NUMBER=your_whatsapp_number
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
PORT=3000
SERVER_URL=http://localhost:3000
NODE_ENV=development
```

### 3. Environment Variables Guide

| Variable | Description | Required |
|----------|-------------|----------|
| `WHATSAPP_NUMBER` | Your WhatsApp number | Yes |
| `MONGODB_URI` | MongoDB connection string | No |
| `GEMINI_API_KEY` | Google Gemini API key for AI | No |
| `PORT` | Server port | No (default: 3000) |
| `SERVER_URL` | Public server URL | Yes (for Vercel) |
| `NODE_ENV` | Environment mode | No |

## Local Development

### Start the Bot

```bash
npm start
```

### With Auto-Reload

```bash
npm run dev
```

The bot will start and display a QR code in your terminal. Scan it with your WhatsApp phone:

1. Open WhatsApp on your phone
2. Go to Settings > Linked Devices
3. Click "Link a Device"
4. Scan the QR code displayed in your terminal

## API Endpoints

### GET `/` - Bot Status
```bash
curl http://localhost:3000/
```

Response:
```json
{
  "name": "KAJUNA_MD Bot",
  "version": "1.0.0",
  "status": "Connected"
}
```

### GET `/qr` - Get QR Code
```bash
curl http://localhost:3000/qr
```

### GET `/status` - Connection Status
```bash
curl http://localhost:3000/status
```

### POST `/send-message` - Send Message
```bash
curl -X POST http://localhost:3000/send-message \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "1234567890",
    "message": "Hello from KAJUNA_MD!"
  }'
```

**Note:** Phone number format: `1234567890` (without +, country code, or spaces)

## Vercel Deployment

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

```bash
vercel
```

### Step 4: Set Environment Variables

During deployment, Vercel will ask for your environment variables:

1. Go to your Vercel Dashboard
2. Select your KAJUNA_MD project
3. Go to Settings > Environment Variables
4. Add the following variables:
   - `WHATSAPP_NUMBER`
   - `MONGODB_URI`
   - `GEMINI_API_KEY`
   - `SERVER_URL` (your Vercel URL)

### Step 5: Link Session for WhatsApp

After deployment:

1. Visit your Vercel URL: `https://your-project.vercel.app/qr`
2. It will show a QR code
3. Scan it with your WhatsApp phone
4. The bot will be connected

## Using with Your WhatsApp

### Connect Your Phone

1. Make sure WhatsApp is installed on your phone
2. Open the app and go to **Settings > Linked Devices**
3. Click **Link a Device**
4. Scan the QR code (local or from Vercel endpoint)
5. Confirm the linking

### Send Messages

Once connected, you can:
- Send messages from your WhatsApp to the bot number
- The bot will respond based on configured commands
- Use prefix `.` for commands (e.g., `.ping`)

### Available Commands

| Command | Description |
|---------|-------------|
| `.ping` | Check if bot is responsive |
| `.help` | Show available commands |
| `.ai <message>` | Chat with AI (requires GEMINI_API_KEY) |
| `.info` | Bot information |

## Database Setup (Optional)

### MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a cluster
4. Get connection string
5. Add to `.env`: `MONGODB_URI=mongodb+srv://...`

## Troubleshooting

### Bot Not Connecting

```bash
# Delete session and rescan QR code
rm -rf src/Session
npm start
```

### QR Code Not Showing

- Make sure WhatsApp is installed on your phone
- Check internet connection
- Try again after waiting 10 seconds

### Messages Not Sending

1. Check bot connection status: `GET /status`
2. Verify phone number format
3. Check if WhatsApp session is still active

### Vercel Build Failed

```bash
# Clear and reinstall
rm -rf node_modules
npm install
vercel
```

## Project Structure

```
KAJUNA_MD/
├── api/
│   └── bot.js              # Vercel serverless handler
├── src/
│   ├── Auth/               # Authentication logic
│   ├── Core/               # Core bot functionality
│   ├── Database/           # Database models
│   ├── Functions/          # Utility functions
│   ├── Plugins/            # Bot plugins
│   ├── Media/              # Media files
│   └── Session/            # WhatsApp session data
├── lib/                    # Library files
├── tmp/                    # Temporary files
├── index.js                # Local server entry
├── app.json                # App configuration
├── package.json            # Dependencies
├── vercel.json             # Vercel config
└── .env.example            # Environment template
```

## Plugin Development

### Create a Plugin

Create a file in `src/Plugins/`:

```javascript
// src/Plugins/myplugin.js

class MyPlugin {
  constructor() {
    this.name = 'My Plugin';
  }

  async execute(context, args) {
    return { text: 'Plugin response!' };
  }
}

export default new MyPlugin();
```

### Load Plugin

In `src/Core/bot.js`:

```javascript
import myPlugin from '../Plugins/myplugin.js';
bot.loadPlugin(myPlugin);
```

## Security Tips

1. **Keep `.env` private** - Never commit to Git
2. **Use strong MongoDB passwords**
3. **Restrict API access** with authentication
4. **Enable HTTPS** on Vercel (automatic)
5. **Rotate API keys** periodically
6. **Use environment variables** for sensitive data

## API Rate Limits

- Vercel: 10 seconds timeout per request
- WhatsApp: Follow official rate limits
- MongoDB: Based on your Atlas plan

## Performance Tips

1. Use caching for frequent requests
2. Optimize database queries
3. Implement message queuing for bulk messages
4. Use CDN for media files

## Support & Documentation

- [Baileys GitHub](https://github.com/WhiskeySockets/Baileys)
- [Vercel Docs](https://vercel.com/docs)
- [WhatsApp Business API](https://www.whatsapp.com/business/api/)

## License

MIT License - See LICENSE file

## Disclaimer

This bot is for educational purposes. Use responsibly and comply with WhatsApp's Terms of Service.

---

**Made with ❤️ by KAJUNA_MD Development Team**
