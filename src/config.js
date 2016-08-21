const root = require('path').join.bind(this, __dirname, '..');

require('dotenv-safe').load({
  path: root('.env'),
  sample: root('.env.example')
});

export const API_URL = process.env.API_URL;
export const SERVER_PORT = process.env.SERVER_PORT;
