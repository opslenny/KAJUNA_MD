# 📱 Connect KAJUNA_MD to Your WhatsApp - Complete Guide

This guide will help you connect your KAJUNA_MD bot to your WhatsApp number.

## Before You Start

✅ Make sure you have:
- WhatsApp installed on your phone
- Your phone number ready
- Bot running locally OR deployed on Vercel
- Internet connection

## Local Connection (Testing)

### Step 1: Start the Bot Locally

```bash
cd KAJUNA_MD
npm install
npm start
```

You should see output like:
```
🚀 KAJUNA_MD Server running on port 3000
📱 Scan QR Code above to connect WhatsApp
```

### Step 2: Get the QR Code

You'll see a QR code in your terminal that looks like this:
```
████████████████████████████
█          ██ ██ ██   ███ ██
█ ██████████ ███████ ███████
█ █        █ █    █ ████ ██
█ █ ██████ █ █████ █ ███ ███
█ █ █    █ █       █ ██████
█ █ █ ██ █ █ █████ █ ██ ███
█ █ █ ██ █ █       █████████
█ █ █    █ █ █████████ █████
█ █ ██████ █ ███ ████████ █
█          █ ███ █████ █ ██
████████████████████████████
```

### Step 3: Scan with WhatsApp

On your phone:

1. **Open WhatsApp**
   - Tap the app on your phone

2. **Go to Settings**
   - Tap the three dots (menu) in the bottom right
   - Select "Settings"

3. **Linked Devices**
   - Tap "Linked Devices"

4. **Link a Device**
   - Tap the "+" button or "Link a Device"

5. **Scan QR Code**
   - Point your phone camera at the QR code in your terminal
   - When the code is recognized, tap "Link"

6. **Confirm**
   - Wait for confirmation
   - You should see "Device linked" message

### Step 4: Test the Connection

Once linked:

1. **Open WhatsApp Chat**
   - Find the chat with your own number or the bot number

2. **Send a Test Message**
   - Type: `.ping`
   - Press Send

3. **Check the Response**
   - Bot should reply: `Pong! 🏓`

If you get a response, ✅ **You're connected!**

## Vercel Connection (Production)

### Step 1: Deploy to Vercel

Follow [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) to:
1. Push code to GitHub
2. Connect GitHub to Vercel
3. Set environment variables
4. Deploy

Your Vercel URL will be: `https://kajuna-md-xxx.vercel.app`

### Step 2: Get QR Code from Vercel

In your browser, visit:
```
https://YOUR_VERCEL_URL/api/bot?action=qr
```

You'll see a JSON response like:
```json
{
  "qr": "data:image/png;base64,iVBORw0KGgo..."
}
```

### Step 3: Display the QR Code

The QR code is encoded in Base64. To scan it:

**Option A: Use Online Tools**
1. Go to [base64.guru/converter/decode/image](https://base64.guru/converter/decode/image)
2. Paste the base64 string (without `data:image/png;base64,` prefix)
3. Click "Decode"
4. Screenshot or display the image

**Option B: Create HTML Viewer**

Create a file `qr_viewer.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>KAJUNA_MD QR Code</title>
</head>
<body>
    <h1>KAJUNA_MD - Scan to Connect</h1>
    <img id="qr" src="" alt="QR Code">
    
    <script>
        const url = 'https://YOUR_VERCEL_URL/api/bot?action=qr';
        
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.qr) {
                    document.getElementById('qr').src = data.qr;
                    setInterval(() => {
                        fetch(url).then(r => r.json()).then(d => {
                            if (d.qr) document.getElementById('qr').src = d.qr;
                        });
                    }, 5000); // Refresh every 5 seconds
                }
            });
    </script>
</body>
</html>
```

Then open this HTML file in your browser.

### Step 4: Scan the QR Code

Same as local version:
1. Open WhatsApp
2. Settings → Linked Devices
3. Link a Device
4. Scan the QR code from the browser
5. Confirm

## Phone Number Format

Your phone number should be **digits only**:

### Correct Format ✅
- `15551234567` - US number
- `441234567890` - UK number
- `917654321098` - India number
- `33123456789` - France number

### Wrong Format ❌
- `+1 (555) 123-4567` - Has symbols
- `+1-555-123-4567` - Has symbols and spaces
- `001 555 123 4567` - Has spaces
- `(555) 123-4567` - Has symbols

## Check Connection Status

### Local Server
```bash
curl http://localhost:3000/status
```

Response:
```json
{
  "status": "Connected",
  "user": "1234567890"
}
```

### Vercel Server
```bash
curl https://YOUR_VERCEL_URL/api/bot?action=status
```

## Available Commands

Once connected, use these commands:

| Command | What it does |
|---------|--------------|
| `.ping` | Check if bot is alive |
| `.help` | Show all commands |
| `.info` | Bot information |
| `.ai hello` | Chat with AI |

## Troubleshooting

### Issue: "Can't scan the QR code"

**Causes:**
- WhatsApp not running on phone
- Camera not working
- QR code not displaying

**Solutions:**
1. Restart WhatsApp on your phone
2. Try again, make sure you're in Settings → Linked Devices first
3. Wait 10 seconds and refresh the QR code
4. Check if camera permissions are enabled

### Issue: "QR code expires"

**Causes:**
- Took too long to scan (usually 30-60 seconds)
- Multiple connection attempts

**Solutions:**
1. Refresh the page to get new QR code
2. Try scanning immediately after refreshing
3. Make sure terminal is still running for local

### Issue: "Bot connects then disconnects"

**Causes:**
- Multiple WhatsApp sessions
- Network timeout
- Session file corruption

**Solutions:**

**For Local:**
```bash
# Stop the bot (Ctrl+C)
# Delete session files
rm -rf src/Session/*

# Restart
npm start
# Scan new QR code
```

**For Vercel:**
1. Delete session files from Vercel storage
2. Visit `/api/bot?action=qr` to get new QR code
3. Scan and reconnect

### Issue: "Messages not sending"

**Causes:**
- Bot not connected
- Wrong phone number format
- WhatsApp not running on phone

**Solutions:**
1. Check status: `/api/bot?action=status`
2. Verify phone number (digits only)
3. Keep WhatsApp open on your phone
4. Check if bot is still linked in WhatsApp Settings

### Issue: "Multiple devices linked"

**Causes:**
- Old session still active
- Scanned QR code twice

**Solutions:**
1. Open WhatsApp on phone
2. Settings → Linked Devices
3. Remove the old/duplicate devices
4. Scan fresh QR code

## Security Notes

⚠️ **Keep Your Phone Linked**
- Your phone must stay online
- WhatsApp must be open
- Don't log out from linked devices

⚠️ **Session Files**
- Keep `src/Session/` folder secure
- Don't share session files
- Delete when not using bot

⚠️ **API Access**
- Protect `/api/bot` endpoints
- Consider adding authentication
- Monitor API usage

## Sending Messages Programmatically

If you want to send messages via API:

### Using cURL
```bash
curl -X POST http://localhost:3000/send-message \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "15551234567",
    "message": "Hello from KAJUNA_MD!"
  }'
```

### Using JavaScript
```javascript
const response = await fetch('http://localhost:3000/send-message', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    phone: '15551234567',
    message: 'Hello from KAJUNA_MD!'
  })
});
const result = await response.json();
console.log(result);
```

### Using Python
```python
import requests

response = requests.post('http://localhost:3000/send-message', json={
    'phone': '15551234567',
    'message': 'Hello from KAJUNA_MD!'
})
print(response.json())
```

## Advanced: Group Messages

To send messages to groups:

1. **Get Group ID**
   - Send a message in the group
   - Check bot logs for group ID

2. **Send to Group**
   ```bash
   curl -X POST http://localhost:3000/send-message \
     -H "Content-Type: application/json" \
     -d '{
       "phone": "123456789-1234567890@g.us",
       "message": "Hello group!"
     }'
   ```

## What Happens Next

After connecting:

1. ✅ Bot receives all your messages
2. ✅ Processes commands (`.ping`, `.help`, etc.)
3. ✅ Responds automatically
4. ✅ Stores session for next use
5. ✅ Can be used 24/7 on Vercel

## Keeping Bot Running

### Local Testing
- Keep terminal open while testing
- Press Ctrl+C to stop

### Production (Vercel)
- Automatically running on Vercel servers
- Available 24/7
- No need to keep anything open

## Next Steps

1. ✅ Connect WhatsApp
2. ✅ Test with `.ping` command
3. ✅ Try other commands
4. ✅ Add custom commands
5. ✅ Deploy advanced features

## Still Having Issues?

1. Check [README.md](./README.md) Troubleshooting section
2. Review [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
3. Check Vercel logs if using cloud
4. Review bot code to understand flow

---

**Version**: 1.0.0  
**Status**: Production Ready ✅

Good luck with your KAJUNA_MD bot! 🚀
