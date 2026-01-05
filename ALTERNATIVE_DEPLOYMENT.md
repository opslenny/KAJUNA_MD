# 🌐 Alternative Free 24/7 Hosting Options

Your KAJUNA_MD bot can run on multiple free hosting platforms for 24/7 uptime. Here are the best options:

---

## 1. 🎨 **Glitch** (EASIEST - RECOMMENDED FOR BEGINNERS)

**Best For:** Quick setup, no credit card, always-on free tier

### Pros:
✅ Completely free forever  
✅ No credit card needed  
✅ Real-time code editor in browser  
✅ Automatic deployment on save  
✅ Built-in always-on support  
✅ Perfect for Node.js apps  

### Cons:
❌ Limited resources compared to others  
❌ Smaller community  

### Setup Steps:

1. **Go to Glitch.com and Sign Up**
   - Visit https://glitch.com
   - Create account or login with GitHub

2. **Import Your Project**
   - Click "New Project" → "Import from GitHub"
   - Enter: `opslenny/KAJUNA_MD`
   - Or use "Clone from Git Repo" with your GitHub URL

3. **Configure Environment Variables**
   - Click ".env" file in editor
   - Add these variables:
   ```
   WHATSAPP_NUMBER=255760898010
   SERVER_URL=https://your-glitch-project-name.glitch.me
   NODE_ENV=production
   MONGODB_URI=(leave empty if not using DB)
   GEMINI_API_KEY=(optional, for AI features)
   ```

4. **Enable Always-On (Free)**
   - Click "Tools" (bottom left)
   - Click "Uptime Monitor"
   - Click "Upgrade to Paid" (it allows free tier!)
   - Or use external monitor like https://uptimerobot.com (free)

5. **Test Your Bot**
   - Your URL will be: `https://your-glitch-project-name.glitch.me`
   - Test with: `https://your-glitch-project-name.glitch.me/api/bot?action=status`
   - Use QR_GENERATOR.html with project URL

---

## 2. 🚀 **Cyclic** (EASY - HEROKU REPLACEMENT)

**Best For:** Scalability, Heroku users migration

### Pros:
✅ Free tier with good uptime  
✅ Similar to Heroku (familiar for some)  
✅ Automatic GitHub deployment  
✅ No credit card for free tier  
✅ Good documentation  

### Cons:
❌ May spin down after inactivity (unless premium)  
❌ Limited free hours per month  

### Setup Steps:

1. **Go to Cyclic.sh and Connect GitHub**
   - Visit https://cyclic.sh
   - Sign in with GitHub
   - Authorize Cyclic

2. **Deploy Your Repository**
   - Click "Link your own" or "Connect Repo"
   - Select: `opslenny/KAJUNA_MD`
   - Click "Connect"

3. **Set Environment Variables**
   - In Cyclic dashboard, go to "Settings" → "Environment Variables"
   - Add:
   ```
   WHATSAPP_NUMBER=255760898010
   SERVER_URL=https://your-app-name.cyclic.app
   NODE_ENV=production
   MONGODB_URI=(optional)
   GEMINI_API_KEY=(optional)
   ```

4. **Auto Deploy**
   - Push to GitHub → Cyclic auto-deploys
   - Monitor deployment in Cyclic dashboard

5. **Test Your Bot**
   - URL: `https://your-app-name.cyclic.app`
   - Test: `https://your-app-name.cyclic.app/api/bot?action=status`

---

## 3. ☁️ **Fly.io** (POWERFUL - GOOD UPTIME)

**Best For:** Better performance, more control, Docker users

### Pros:
✅ Free tier with decent specs  
✅ Good uptime  
✅ Global deployment  
✅ More resources than others  
✅ Docker support  

### Cons:
❌ Slightly more complex setup  
❌ Requires credit card (but no charges for free tier)  

### Setup Steps:

1. **Install Fly CLI**
   - Download from https://fly.io/docs/getting-started/installing-flyctl/
   - Windows: Use installer or `choco install flyctl`

2. **Sign Up at Fly.io**
   - Visit https://fly.io
   - Create account (add credit card for verification)

3. **Clone and Configure Your Project**
   ```bash
   git clone https://github.com/opslenny/KAJUNA_MD
   cd KAJUNA_MD
   ```

4. **Login to Fly**
   ```bash
   flyctl auth login
   ```

5. **Create Fly App**
   ```bash
   flyctl launch
   ```
   - Choose app name: `kajuna-md-xyz`
   - Fly auto-detects Node.js
   - Say "Yes" to Dockerfile generation

6. **Set Environment Variables**
   ```bash
   flyctl secrets set WHATSAPP_NUMBER=255760898010
   flyctl secrets set SERVER_URL=https://kajuna-md-xyz.fly.dev
   flyctl secrets set NODE_ENV=production
   flyctl secrets set MONGODB_URI=
   flyctl secrets set GEMINI_API_KEY=
   ```

7. **Deploy**
   ```bash
   flyctl deploy
   ```

8. **Test Your Bot**
   - URL: `https://kajuna-md-xyz.fly.dev`
   - Test: `https://kajuna-md-xyz.fly.dev/api/bot?action=status`

---

## 4. 🔷 **Railway** (GOOD ALTERNATIVE)

**Best For:** Simple deployment, good free credits

### Pros:
✅ $5 free monthly credits  
✅ Easy GitHub integration  
✅ Reasonable uptime  
✅ Good documentation  

### Cons:
❌ Free tier expires after credits used  
❌ Needs payment method  

### Setup Steps:

1. **Go to Railway.app**
   - Visit https://railway.app
   - Sign in with GitHub

2. **Create New Project**
   - Click "Start New Project"
   - Select "Deploy from GitHub repo"
   - Connect and select `KAJUNA_MD`

3. **Add Environment Variables**
   - Go to "Variables" tab
   - Add all 5 variables

4. **Deploy**
   - Railway auto-deploys
   - Get your URL from "Deployments"

---

## 5. 📦 **Render** (FAST & RELIABLE)

**Best For:** Good balance, fast deployment

### Pros:
✅ Free tier available  
✅ Very fast deployment  
✅ Good uptime for free tier  
✅ Native GitHub integration  

### Cons:
❌ Spins down after 15 minutes inactivity (on free tier)  
❌ Limited resources  

### Setup Steps:

1. **Go to Render.com**
   - Visit https://render.com
   - Sign in with GitHub

2. **Create Web Service**
   - Click "New +" → "Web Service"
   - Connect GitHub repository
   - Select `KAJUNA_MD`

3. **Configure**
   - Name: `kajuna-md`
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `node index.js`

4. **Add Environment Variables**
   - In settings, add all 5 variables

5. **Deploy**
   - Click "Create Web Service"
   - Deployment starts automatically

---

## 📊 Comparison Table

| Platform | Cost | Setup Time | Uptime | Resources | Best For |
|----------|------|-----------|--------|-----------|----------|
| **Glitch** | Free | 5 min | 24/7 | Medium | Beginners |
| **Cyclic** | Free | 10 min | ~90% | Medium | Heroku users |
| **Fly.io** | Free | 15 min | 99% | Good | Developers |
| **Railway** | Paid* | 10 min | 99.9% | Good | Scale-up |
| **Render** | Free* | 10 min | ~95% | Medium | Fast deployment |
| **Vercel** | Free | 10 min | 99.9% | Good | Original choice |

*Free tier with limitations or credits

---

## 🔄 How to Switch Between Platforms

1. **Create .env file** (from .env.example):
   ```bash
   cp .env.example .env
   ```

2. **Update SERVER_URL** to your new hosting URL:
   ```
   WHATSAPP_NUMBER=255760898010
   SERVER_URL=https://your-new-url.com
   NODE_ENV=production
   ```

3. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Update for new hosting"
   git push
   ```

4. **Deploy to new platform** using platform's dashboard

5. **Use QR_GENERATOR.html** with new URL/project name

---

## 🛠️ Troubleshooting

### Bot not responding on new platform?

1. **Check environment variables are set correctly**
2. **Verify SERVER_URL matches your actual URL**
3. **Test status endpoint**: `https://your-url.com/api/bot?action=status`
4. **Check platform logs/console** for errors
5. **Ensure index.js or api/bot.js is running**

### QR Code not appearing?

1. Verify bot is running: test status endpoint first
2. Make sure project is fully deployed (not still deploying)
3. Check if bot session is initialized (first request takes longer)
4. Try refreshing QR_GENERATOR.html and entering project name again

### WhatsApp connection failing?

1. Check WHATSAPP_NUMBER is correct format (digits only)
2. Make sure bot is in "Connected" state
3. Phone must be connected to internet and WhatsApp must be open during linking
4. Try again after 5 minutes if initial attempt fails

---

## ✨ Recommended Setup Path

### For Beginners:
1. **Start with Glitch** (easiest, fastest setup)
2. **Get bot working and testing**
3. **Once comfortable, try Fly.io** for better performance

### For Developers:
1. **Use Fly.io** (best control, good uptime)
2. **Use Railway** if you need scaling

### For Maximum Uptime:
1. **Use Fly.io + Railway** in parallel (requires 2 deployments)
2. Or stick with **original Vercel + backup Glitch**

---

## 📝 Quick Command Reference

### Glitch
- **No commands needed** - everything in browser

### Cyclic
```bash
git push  # Auto-deploys to Cyclic
```

### Fly.io
```bash
flyctl deploy  # Deploy to Fly
flyctl logs    # View logs
flyctl ssh console  # Debug
```

### Railway
- **No commands needed** - auto-deploys on GitHub push

### Render
- **No commands needed** - auto-deploys on GitHub push

---

## 🎯 Next Steps

1. **Choose platform** (Glitch recommended for easiest start)
2. **Follow setup steps** for your chosen platform
3. **Update QR_GENERATOR.html** with new project name/URL
4. **Test with `/api/bot?action=status`** endpoint
5. **Generate QR code** and scan with WhatsApp
6. **Send `.ping`** command to verify bot works

Good luck! 🚀
