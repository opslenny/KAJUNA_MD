KAJUNA_MD/
│
├── 📄 index.js                 ← Main bot (local server)
├── 📦 package.json             ← Dependencies & scripts
├── 🔧 app.json                 ← App configuration
│
├── 📁 api/
│   └── 🤖 bot.js              ← Vercel serverless handler
│
├── 📁 src/
│   ├── 📁 Auth/
│   │   └── auth.js            ← User authentication
│   │
│   ├── 📁 Core/
│   │   ├── bot.js             ← Core bot logic
│   │   └── database.js        ← Database connection
│   │
│   ├── 📁 Plugins/            ← Bot plugins
│   │   ├── ai.js              ← AI chat plugin
│   │   ├── download.js        ← Media download plugin
│   │   └── other.js           ← Fun & tools plugins
│   │
│   ├── 📁 Database/           ← Database models
│   ├── 📁 Functions/          ← Utility functions
│   ├── 📁 Media/              ← Media files
│   └── 📁 Session/            ← WhatsApp sessions (auto-created)
│
├── 📁 lib/                    ← Helper libraries
│   ├── myfunc.js              ← Utility functions
│   ├── converter.js           ← Data conversion
│   └── color.js               ← Console colors
│
├── 📁 tmp/                    ← Temporary files
│
├── 📄 .env.example            ← Environment template (COPY THIS!)
├── 📄 .env                    ← Your credentials (CREATE THIS - don't commit!)
├── 📄 .gitignore              ← Git ignore patterns
│
├── 📄 vercel.json             ← Vercel configuration
│
├── 📚 Documentation/
│   ├── README.md              ← Full documentation
│   ├── DEPLOYMENT_GUIDE.md    ← Vercel deployment steps
│   ├── QUICKSTART.md          ← Quick reference
│   ├── SETUP_SUMMARY.md       ← This setup summary
│   └── LICENSE                ← MIT License
│
├── 🔨 Setup Scripts/
│   ├── setup.sh               ← Linux/Mac setup
│   └── setup.bat              ← Windows setup
│
└── 📄 (Other git files)
    ├── .git/
    └── .gitignore


═══════════════════════════════════════════════════════════════════

🎯 QUICK NAVIGATION

📖 START HERE → Read: SETUP_SUMMARY.md or QUICKSTART.md

🚀 SETUP → Run: npm install && npm start

📱 DEPLOY → Follow: DEPLOYMENT_GUIDE.md

📚 DETAILS → Read: README.md

═══════════════════════════════════════════════════════════════════

FILE PURPOSES

Core Bot Files:
- index.js          Main application (for local testing)
- api/bot.js        Vercel serverless version (for production)
- app.json          Configuration file

Configuration:
- .env              Your secrets (CREATE THIS)
- .env.example      Template to copy from
- vercel.json       Vercel deployment settings
- package.json      Dependencies & npm scripts

Authentication:
- src/Auth/auth.js  User authentication handling

Bot Logic:
- src/Core/bot.js           Command processing
- src/Core/database.js      Database connection

Plugins:
- src/Plugins/ai.js         AI chat
- src/Plugins/download.js   Media download
- src/Plugins/other.js      Fun & tools

Helpers:
- lib/myfunc.js     Utility functions
- lib/converter.js  Data conversion
- lib/color.js      Console colors

Session & Temp:
- src/Session/      WhatsApp session files (created automatically)
- tmp/              Temporary files

═══════════════════════════════════════════════════════════════════

WORKFLOW

1. SETUP
   npm install
   cp .env.example .env
   (Edit .env with your info)

2. LOCAL TESTING
   npm start
   (Scan QR code)
   Send: .ping → Bot replies: Pong!

3. DEPLOY TO VERCEL
   git push to GitHub
   Import to Vercel
   Set env vars
   Done!

4. USE ON WHATSAPP
   Scan QR code from Vercel
   Send commands to bot number
   Enjoy!

═══════════════════════════════════════════════════════════════════

WHAT TO EDIT

For custom commands:
→ Edit: index.js (line 80+) for local
→ Edit: api/bot.js (line 60+) for Vercel

For new plugins:
→ Create: src/Plugins/yourplugin.js
→ Register in: src/Core/bot.js

For database:
→ Update: src/Core/database.js
→ Add to .env: MONGODB_URI

═══════════════════════════════════════════════════════════════════

IMPORTANT FILES TO KEEP SAFE

🔒 NEVER COMMIT THESE:
   - .env (contains your credentials!)
   - src/Session/ (WhatsApp auth data)

✅ ALWAYS COMMIT THESE:
   - Everything else
   - .env.example (template only)

═══════════════════════════════════════════════════════════════════

GETTING STARTED

Choose your path:

👶 BEGINNER → Start with QUICKSTART.md (5 min read)
↓
Run setup.sh or setup.bat
↓
npm start
↓
Scan QR code

👨‍💻 DEVELOPER → Read README.md (15 min read)
↓
Understand the structure
↓
Customize plugins
↓
Deploy to Vercel

🚀 ADVANCED → Check DEPLOYMENT_GUIDE.md
↓
Set up CI/CD
↓
Integrate databases & APIs
↓
Build advanced features

═══════════════════════════════════════════════════════════════════

Made with ❤️ by KAJUNA_MD Team
Version 1.0.0 | Ready for Production
