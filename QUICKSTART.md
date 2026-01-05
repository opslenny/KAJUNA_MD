# KAJUNA_MD - Quick Reference

## Installation (Windows)

1. **Run Setup**
   ```
   setup.bat
   ```

## Installation (Mac/Linux)

1. **Run Setup**
   ```
   bash setup.sh
   ```

## Quick Commands

### Start Bot
```bash
npm start
```

### Development with Auto-Reload
```bash
npm run dev
```

### Deploy to Vercel
```bash
npx vercel --prod
```

## API Endpoints (Local)

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/` | GET | Bot status |
| `/qr` | GET | QR code for WhatsApp |
| `/status` | GET | Connection status |
| `/send-message` | POST | Send WhatsApp message |

## Send Message Example

```bash
curl -X POST http://localhost:3000/send-message \
  -H "Content-Type: application/json" \
  -d '{"phone":"1234567890","message":"Hello!"}'
```

## WhatsApp Commands

After connecting, use these commands:

- `.ping` - Test if bot is working
- `.info` - Bot information  
- `.help` - Show all commands

## Vercel Endpoints

Replace `YOUR_URL` with your Vercel deployment URL:

```
https://YOUR_URL/api/bot?action=qr      → Get QR code
https://YOUR_URL/api/bot?action=status  → Check status
https://YOUR_URL/api/bot?action=init    → Initialize
```

## Environment Variables

Required:
- `WHATSAPP_NUMBER` - Your phone number (digits only)
- `SERVER_URL` - Your deployment URL

Optional:
- `MONGODB_URI` - MongoDB connection string
- `GEMINI_API_KEY` - Google Gemini API key
- `PORT` - Server port (default 3000)

## File Structure

```
KAJUNA_MD/
├── index.js           ← Main bot file (local)
├── api/bot.js         ← Vercel serverless handler
├── src/
│   ├── Auth/         ← Authentication
│   ├── Core/         ← Core functionality
│   ├── Plugins/      ← Bot plugins
│   └── Session/      ← WhatsApp session (auto-created)
├── .env.example      ← Copy to .env
├── package.json      ← Dependencies
└── README.md         ← Full documentation
```

## Troubleshooting

### Bot Not Starting
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm start
```

### WhatsApp Not Connecting
1. Delete `src/Session` folder
2. Run bot again
3. Scan new QR code

### Messages Not Sending
1. Check `/status` endpoint
2. Verify phone number format
3. Make sure WhatsApp is running on phone

## GitHub & Vercel

### Push to GitHub
```bash
git add .
git commit -m "Update KAJUNA_MD"
git push origin main
```

### Deploy to Vercel
```bash
vercel --prod
```

## Need Help?

1. Check **README.md** for full documentation
2. Read **DEPLOYMENT_GUIDE.md** for step-by-step setup
3. Check Vercel logs in dashboard
4. Review Baileys documentation

---

**Version**: 1.0.0  
**Made with ❤️ by KAJUNA_MD Team**
