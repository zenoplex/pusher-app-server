require('dotenv').config();

const { PUSHER_APP_ID, PUSHER_KEY, PUSHER_SECRET } = process.env;

export const pusherAppId: string = PUSHER_APP_ID || '';
export const pusherKey: string = PUSHER_KEY || '';
export const pusherSecret: string = PUSHER_SECRET || '';
