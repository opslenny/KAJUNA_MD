# 🎨 GLITCH DEPLOYMENT - DETAILED STEP-BY-STEP GUIDE

Complete instructions to deploy KAJUNA_MD bot on Glitch.com for 24/7 uptime (FREE)

---

## ✅ PREREQUISITES

Before starting, make sure you have:
- ✅ GitHub account with your KAJUNA_MD repository
- ✅ Your WhatsApp number: `255760898010`
- ✅ A text editor to copy/paste environment variables
- ✅ Internet connection

---

## 📋 STEP 1: Create Glitch Account

### 1.1 Go to Glitch
- Open browser and visit: **https://glitch.com**

### 1.2 Sign Up (if you don't have account)
- Click **"Sign Up"** (top right)
- Choose **"Sign up with GitHub"**
- Authorize Glitch to access your GitHub

### 1.3 Or Sign In (if you already have account)
- Click **"Sign in"** (top right)
- Click **"Sign in with GitHub"**
- Confirm authorization

✅ **You should now be logged into Glitch**

---

## 🔧 STEP 2: Import Your Repository

### 2.1 Create New Project
- Click **"New Project"** (top left)
- See dropdown menu with options

### 2.2 Import from GitHub
- Click **"Import from GitHub"**
- A dialog box will appear

### 2.3 Enter Repository Details
- In the text field, paste: **opslenny/KAJUNA_MD**
- Click **"Import"**

**Glitch will now:**
- Download your repository
- Install dependencies (npm install)
- Create your project
- Assign a random project name (like `melodic-giraffe-123`)

✅ **Wait 2-3 minutes for import to complete**

---

## 📝 STEP 3: Configure Environment Variables

### 3.1 Open .env File
- In the **left sidebar**, look for **".env"** file
- Click on it to open
- If not visible, click **"⋮"** (three dots) → **"Show hidden files"**

### 3.2 Add Your Variables
The file might be empty or have template content. **Replace everything with:**

```
WHATSAPP_NUMBER=255760898010
SERVER_URL=https://YOUR-GLITCH-PROJECT-NAME.glitch.me
NODE_ENV=production
MONGODB_URI=
GEMINI_API_KEY=
```

**IMPORTANT:** Replace `YOUR-GLITCH-PROJECT-NAME` with your actual Glitch project name

### 3.3 Where to Find Your Project Name
- Look at **top left** of Glitch editor
- You'll see something like: **"🎉 YOUR-PROJECT-NAME"**
- That's your project name!
- Your URL will be: **https://YOUR-PROJECT-NAME.glitch.me**

### 3.4 Example:
If your project name is **"melodic-giraffe-123"**, then:
```
WHATSAPP_NUMBER=255760898010
SERVER_URL=https://melodic-giraffe-123.glitch.me
NODE_ENV=production
MONGODB_URI=
GEMINI_API_KEY=
```

### 3.5 Save .env
- Press **Ctrl+S** (or Cmd+S on Mac)
- Should save automatically

✅ **Environment variables configured!**

---

## 🚀 STEP 4: Start Your Bot

### 4.1 Open Terminal/Console
- Click **"Tools"** (bottom left)
- Click **"Logs"**
- Or click **"Terminal"** if available

### 4.2 Check if Bot is Running
- Glitch should auto-start when you save files
- Look in logs for messages like:
  ```
  Server running on port 3000
  ```

### 4.3 If Not Running
- Click **"Refresh"** (top toolbar)
- Or restart the project:
  - Click **"⋮"** (three dots, top right)
  - Click **"Restart Project"**

### 4.4 Wait for Startup
- Wait 10-15 seconds
- You should see in logs:
  ```
  ✅ Server ready!
  🤖 Bot initialized
  ```

✅ **Bot is running on Glitch!**

---

## 🧪 STEP 5: Test Your Bot

### 5.1 Test Status Endpoint
- Open new browser tab
- Visit: **https://YOUR-GLITCH-PROJECT-NAME.glitch.me/api/bot?action=status**
- Replace `YOUR-GLITCH-PROJECT-NAME` with your actual project name

### 5.2 Expected Response
You should see JSON response like:
```json
{
  "status": "Disconnected",
  "message": "Bot initialized, waiting for QR code scan",
  "whatsapp_number": "255760898010",
  "uptime": "12 seconds"
}
```

**Status might show:**
- **"Disconnected"** - Normal, waiting for WhatsApp link
- **"Connected"** - Already linked to WhatsApp
- **Error** - Check logs and environment variables

### 5.3 If Error
- Check `.env` file has correct variables
- Check SERVER_URL is exactly: `https://YOUR-PROJECT-NAME.glitch.me`
- Click **"Refresh"** project
- Wait 5 seconds
- Try again

✅ **Bot is responding!**

---

## 📱 STEP 6: Generate QR Code

### 6.1 Open QR Generator
- On your computer, open file: **QR_GENERATOR.html**
- Located in: `c:\Users\Leonard Leonidas\Desktop\KAJUNA_MD\QR_GENERATOR.html`
- Just double-click it to open in browser

### 6.2 Enter Project Name
- In the text field, enter: **YOUR-GLITCH-PROJECT-NAME**
- Example: `melodic-giraffe-123`

### 6.3 Get QR Code
- Click **"Get QR Code"** button
- Wait 2-3 seconds

### 6.4 See QR Code
- A QR code image should appear
- If not, check:
  - Is project name correct?
  - Is bot running? (test status endpoint)
  - Wait 5 more seconds and try again

✅ **QR Code generated!**

---

## 📲 STEP 7: Scan with WhatsApp

### 7.1 On Your Phone
- Open **WhatsApp** app
- Go to **Settings** (bottom right)
- Tap **"Linked Devices"** or **"Linked accounts"**

### 7.2 Link New Device
- Tap **"Link a device"** or **"Link a new device"**
- Camera will open to scan QR

### 7.3 Scan QR Code
- Point phone camera at QR code on computer screen
- Keep steady until scanned
- WhatsApp should show: **"Scanning..."**

### 7.4 Confirm Linking
- After scan, you should see notification:
  - **"Device linked successfully"**
  - Or **"Connection established"**

### 7.5 On Your Computer
- Glitch logs should show:
  ```
  ✅ WhatsApp session established
  Connected as: 255760898010
  ```

✅ **Bot is linked to your WhatsApp!**

---

## 🧪 STEP 8: Test Commands

### 8.1 Send Test Message
- Go to any WhatsApp chat (personal or group)
- Send message: `.ping`

### 8.2 Bot Should Reply
- Within 2-3 seconds, you should get:
  ```
  Pong! 🏓
  ```

### 8.3 Try More Commands
```
.help      - See all available commands
.ai hello  - Get AI response (if API key added)
```

✅ **Bot is working!**

---

## 🔄 STEP 9: Enable Always-On (Optional)

By default, Glitch keeps projects running 24/7 FREE. But if you want to ensure always-on status:

### 9.1 Check Status
- Click **"Tools"** (bottom left)
- Click **"Uptime Monitor"**
- Should show green status

### 9.2 If Needs Upgrade
- Click **"Upgrade to Paid"** 
- Don't worry - free tier allows always-on!
- Glitch will set up monitoring

✅ **Your bot runs 24/7!**

---

## 📚 STEP 10: Future Changes (Optional)

### 10.1 If You Update Code on GitHub
Glitch pulls latest code automatically, but to force sync:
- Click **"⋮"** (three dots, top right)
- Click **"Refresh"** or **"Terminal"**
- Type: `git pull`

### 10.2 If You Change .env
- Edit .env in Glitch
- Click **"Refresh"** project
- Bot restarts with new variables

### 10.3 If Bot Crashes
- Check logs for errors
- Click **"Refresh"** to restart
- Ask for help with error message

✅ **You can maintain your bot from Glitch!**

---

## 🎯 YOUR GLITCH BOT URLs

Once deployed, you'll have these URLs:

| URL | Purpose |
|-----|---------|
| `https://YOUR-PROJECT-NAME.glitch.me` | Your bot home page |
| `https://YOUR-PROJECT-NAME.glitch.me/api/bot?action=status` | Check bot status |
| `https://YOUR-PROJECT-NAME.glitch.me/api/bot?action=qr` | Get QR code (auto) |

---

## ❌ TROUBLESHOOTING

### Problem: QR Code not appearing

**Solution:**
1. Check status endpoint works (step 5.1)
2. Wait 5 more seconds
3. Refresh QR_GENERATOR.html
4. Enter project name again
5. Click "Get QR Code" button

### Problem: Bot not responding to messages

**Solution:**
1. Check WhatsApp session is linked
2. Send `.ping` command
3. Check Glitch logs for errors
4. Restart project (click Refresh)
5. Re-scan QR code

### Problem: WhatsApp scan fails

**Solution:**
1. Ensure phone internet is ON
2. Close WhatsApp completely
3. Reopen WhatsApp
4. Try scanning again
5. Check QR code is clear and not blurry

### Problem: .env file not visible

**Solution:**
1. In Glitch sidebar, click **"⋮"** (three dots)
2. Click **"Show hidden files"**
3. .env should now appear

### Problem: Project keeps stopping

**Solution:**
1. Check all 5 environment variables are set correctly
2. Check SERVER_URL exactly matches your Glitch URL
3. Restart: Click "⋮" → "Restart Project"
4. Check logs for errors

---

## ✨ NEXT STEPS

### You're Done! 🎉

Your bot is now:
- ✅ Deployed on Glitch
- ✅ Running 24/7
- ✅ Connected to your WhatsApp
- ✅ Ready to respond to commands

### What You Can Do Now:

1. **Share Bot**
   - Give your Glitch URL to others
   - They can try commands via WhatsApp

2. **Add More Commands**
   - Edit files in Glitch
   - Add new features
   - Code changes auto-deploy

3. **Monitor Bot**
   - Check logs regularly
   - Monitor WhatsApp messages
   - Fix issues as they arise

4. **Backup on Multiple Platforms**
   - You have Vercel as backup
   - Can also deploy to Cyclic, Fly.io, etc.

---

## 📞 SUPPORT

For issues:
1. Check **Glitch logs** (click Tools → Logs)
2. Check **environment variables** (.env file)
3. Test **status endpoint** in browser
4. Read **ALTERNATIVE_DEPLOYMENT.md** for detailed guide
5. Check **README.md** for general help

---

## 🎉 CONGRATULATIONS!

Your KAJUNA_MD bot is now running 24/7 on Glitch!

You have successfully:
- ✅ Imported GitHub repository to Glitch
- ✅ Configured environment variables
- ✅ Started the bot
- ✅ Tested the bot is working
- ✅ Generated QR code
- ✅ Linked to WhatsApp
- ✅ Verified commands work

**Your bot is live and ready to use!** 🚀
