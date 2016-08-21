'use strict';

import dotenvSafe from 'dotenv-safe';
dotenvSafe.load();


export const API_URL = process.env.API_URL;
export const SERVER_PORT = process.env.SERVER_PORT;

