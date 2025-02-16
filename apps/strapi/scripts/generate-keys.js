const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const generateKey = () => crypto.randomBytes(32).toString('base64');

const keys = {
  APP_KEYS: `${generateKey()},${generateKey()}`,
  API_TOKEN_SALT: generateKey(),
  ADMIN_JWT_SECRET: generateKey(),
  TRANSFER_TOKEN_SALT: generateKey(),
  JWT_SECRET: generateKey(),
};

const envPath = path.join(__dirname, '..', '.env');
let envContent = fs.readFileSync(envPath, 'utf-8');

Object.entries(keys).forEach(([key, value]) => {
  envContent = envContent.replace(new RegExp(`${key}=.*`), `${key}=${value}`);
});

fs.writeFileSync(envPath, envContent);

console.log('Generated new secure keys and updated .env file');
