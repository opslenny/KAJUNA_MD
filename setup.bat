@echo off
REM Quick start script for KAJUNA_MD on Windows

echo.
echo KAJUNA_MD Bot Setup
echo ===================
echo.

REM Check Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed. Please install Node.js 16+
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo OK: Node.js found: %NODE_VERSION%

REM Check npm
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: npm is not installed
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo OK: npm found: %NPM_VERSION%

REM Install dependencies
echo.
echo Installing dependencies...
call npm install

REM Create .env file
if not exist .env (
    echo.
    echo Creating .env file from template...
    copy .env.example .env
    echo WARNING: Please update .env with your credentials
)

REM Create directories
if not exist src\Session mkdir src\Session
if not exist tmp mkdir tmp

echo.
echo OK: Setup complete!
echo.
echo Next steps:
echo 1. Update .env with your credentials
echo 2. Run: npm start
echo 3. Scan QR code with WhatsApp
echo.
pause
