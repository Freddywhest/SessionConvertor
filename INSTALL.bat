@echo off
echo Copying .env-example to .env...
copy .env-example .env
echo Please edit the .env file to add your API_ID and API_HASH after installation.
echo Installing dependencies...
npm install
pause