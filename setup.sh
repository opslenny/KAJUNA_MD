#!/bin/bash
# Quick start script for KAJUNA_MD

echo "🚀 KAJUNA_MD Bot Setup"
echo "====================="

# Check Node.js installation
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"

# Check npm installation
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed"
    exit 1
fi

echo "✅ npm found: $(npm --version)"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo ""
    echo "📝 Creating .env file from template..."
    cp .env.example .env
    echo "⚠️  Please update .env with your credentials"
fi

# Create session directory
mkdir -p src/Session
mkdir -p tmp

echo ""
echo "✅ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Update .env with your credentials:"
echo "   - WHATSAPP_NUMBER"
echo "   - MONGODB_URI (optional)"
echo "   - GEMINI_API_KEY (optional)"
echo ""
echo "2. Start the bot:"
echo "   npm start"
echo ""
echo "3. Scan the QR code with WhatsApp"
echo ""
