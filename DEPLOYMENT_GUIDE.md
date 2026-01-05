# KAJUNA_MD Vercel Deployment Guide

Complete step-by-step guide to deploy KAJUNA_MD on Vercel and connect it to your WhatsApp number.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [GitHub Setup](#github-setup)
3. [Vercel Deployment](#vercel-deployment)
4. [Environment Variables](#environment-variables)
5. [WhatsApp Connection](#whatsapp-connection)
6. [Testing](#testing)
7. [Troubleshooting](#troubleshooting)

## Prerequisites

### What You Need

1. **GitHub Account** - [github.com](https://github.com)
2. **Vercel Account** - [vercel.com](https://vercel.com) (Sign up with GitHub)
3. **WhatsApp** - Installed on your phone
4. **Text Editor** - VS Code or any editor
5. **Git** - Installed on your computer

### Install Git (Windows)

1. Download from [git-scm.com](https://git-scm.com)
2. Run installer and click Next until done
3. Open Command Prompt and verify:
   ```
   git --version
   ```

## GitHub Setup

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `KAJUNA_MD`
3. Description: `Advanced WhatsApp Bot`
4. Select **Public** (for easier deployment)
5. Click **Create Repository**

### Step 2: Push Code to GitHub

In your project folder, run:

```bash
git init
git add .
git commit -m "Initial commit - KAJUNA_MD Bot"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/KAJUNA_MD.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Vercel Deployment

### Step 1: Connect GitHub to Vercel

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **Add New Project**
3. Click **Import Git Repository**
4. Select your `KAJUNA_MD` repository
5. Click **Import**

### Step 2: Configure Project Settings

On the import screen:

- **Project Name**: `KAJUNA_MD`
- **Framework**: Select **Other**
- **Root Directory**: `./`

### Step 3: Set Environment Variables

Before deploying, add your environment variables:

1. Scroll to **Environment Variables**
2. Add these variables:

```
WHATSAPP_NUMBER = YOUR_PHONE_NUMBER
MONGODB_URI = YOUR_MONGODB_CONNECTION_STRING
GEMINI_API_KEY = YOUR_API_KEY
NODE_ENV = production
SERVER_URL = https://your-project.vercel.app
```

### Step 4: Deploy

Click **Deploy**. Wait 2-3 minutes for deployment to complete.

### Step 5: Get Your Vercel URL

After deployment:
- Your URL will be: `https://kajuna-md-xxx.vercel.app`
- Copy this URL for later use

## Environment Variables

### Required Variables

#### 1. WHATSAPP_NUMBER
Your WhatsApp phone number in this format: `1234567890` (without +, country code)

**Example**: For +1 (555) 123-4567, use: `15551234567`

#### 2. MONGODB_URI (Optional but Recommended)
For database storage. Get from MongoDB Atlas:

1. Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Sign up (free tier available)
3. Create a cluster
4. Click Connect → Copy connection string
5. Replace `<password>` with your password

**Example**: 
```
mongodb+srv://username:password@cluster.mongodb.net/kajunadb?retryWrites=true
```

#### 3. GEMINI_API_KEY (Optional)
For AI chat features:

1. Go to [ai.google.dev](https://ai.google.dev)
2. Click **Get API Key**
3. Click **Create API Key**
4. Copy the key

#### 4. SERVER_URL
Your Vercel deployment URL:
```
https://kajuna-md-xxx.vercel.app
```

## WhatsApp Connection

### Method 1: Connect via Vercel (Recommended)

#### Step 1: Trigger QR Code Generation

Open your browser and visit:
```
https://YOUR_VERCEL_URL/api/bot?action=qr
```

You should see a JSON response with a QR code.

#### Step 2: Scan QR Code

1. Open **WhatsApp** on your phone
2. Go to **Settings** → **Linked Devices**
3. Click **Link a Device**
4. Use your phone's camera to scan the QR code from the browser

#### Step 3: Verify Connection

Visit this URL to check status:
```
https://YOUR_VERCEL_URL/api/bot?action=status
```

Should show:
```json
{
  "status": "Connected",
  "user": "1234567890"
}
```

### Method 2: Test the Bot

#### Send a Test Message

1. Open WhatsApp on your phone
2. Start a new chat
3. Type: `.ping`
4. The bot should reply: `Pong! 🏓`

#### Send Message via API

Use a tool like Postman or curl:

```bash
curl -X POST https://YOUR_VERCEL_URL/api/bot \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "1234567890",
    "message": "Hello KAJUNA_MD!"
  }'
```

## Testing

### Test Checklist

- [ ] Bot deployed on Vercel
- [ ] Environment variables set
- [ ] QR code generated and scanned
- [ ] Status shows "Connected"
- [ ] `.ping` command works
- [ ] Message sending works via API

### Common Test Commands

```
.ping          → Check if bot is active
.help          → Show available commands
.info          → Bot information
.ai hello      → Chat with AI (if GEMINI_API_KEY set)
```

## Troubleshooting

### QR Code Not Loading

**Problem**: `https://YOUR_VERCEL_URL/api/bot?action=qr` returns null

**Solution**:
1. Check if Vercel deployment is successful
2. Verify all environment variables are set
3. Restart the project:
   ```
   vercel --prod --git-force-new-deployment
   ```

### WhatsApp Not Linking

**Problem**: "Can't scan QR code" or "Invalid QR code"

**Solution**:
1. Make sure WhatsApp is already running on your phone
2. Go to **Settings** → **Linked Devices** first
3. Then scan the code
4. Keep the browser page open until linked

### Bot Not Responding

**Problem**: Messages not being received or replied to

**Solution**:
1. Check connection status: `/api/bot?action=status`
2. Try `.ping` command
3. If disconnected, rescan QR code:
   - Delete the session: Remove session files
   - Get new QR: `/api/bot?action=qr`
   - Scan again

### Connection Drops

**Problem**: Bot connects then disconnects randomly

**Solution**:
1. Verify `SERVER_URL` in environment variables matches Vercel URL
2. Check for any errors in Vercel logs:
   - Dashboard → Your Project → Logs
3. Increase timeout in `vercel.json`:
   ```json
   {
     "functions": {
       "api/bot.js": {
         "memory": 1024,
         "maxDuration": 300
       }
     }
   }
   ```

### MongoDB Connection Issues

**Problem**: "MongoDB URI not provided" warning

**Solution**:
1. If you don't need database, ignore the warning
2. To add MongoDB:
   - Sign up at MongoDB Atlas
   - Get connection string
   - Add `MONGODB_URI` environment variable on Vercel
   - Redeploy

### Vercel Deployment Failed

**Problem**: Build failed or deployment errors

**Solution**:
```bash
# Clear local cache
rm -rf .vercel

# Reinstall dependencies
rm -rf node_modules
npm install

# Redeploy
vercel --prod
```

## Advanced Configuration

### Customize Bot Behavior

Edit `index.js` to add more commands:

```javascript
if (text.toLowerCase().includes('hello')) {
  await sock.sendMessage(from, { text: 'Hello! 👋' });
}

if (text.toLowerCase().includes('help')) {
  await sock.sendMessage(from, { 
    text: `.ping - Check status\n.help - Show commands` 
  });
}
```

### Add Database Storage

In `src/Core/database.js`, uncomment MongoDB connection:

```javascript
import Database from './src/Core/database.js';

await Database.connect(process.env.MONGODB_URI);
```

### Enable Multiple Numbers

You can link the bot to different numbers by:
1. Creating separate sessions
2. Deploying multiple Vercel projects
3. Or using environment-based session management

## Security Recommendations

1. ✅ Keep `.env` secret - Never commit to GitHub
2. ✅ Use GitHub private repositories for sensitive data
3. ✅ Rotate API keys periodically
4. ✅ Monitor Vercel logs for suspicious activity
5. ✅ Use strong MongoDB passwords
6. ✅ Enable 2FA on GitHub and Vercel accounts

## Performance Tips

- Session data stored locally in `src/Session/`
- Messages cached in memory
- Database queries optimized
- API responses compressed

## Support & Help

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Baileys GitHub**: [github.com/WhiskeySockets/Baileys](https://github.com/WhiskeySockets/Baileys)
- **GitHub Issues**: Create an issue in your repository

## Next Steps

1. ✅ Deploy on Vercel
2. ✅ Connect WhatsApp
3. ✅ Test basic commands
4. ✅ Add custom commands in `index.js`
5. ✅ Integrate with APIs/Services
6. ✅ Set up database (optional)

---

**Happy Botting! 🤖**
