import * as R from 'ramda';
import * as express from 'express';
import Pusher = require('pusher');
import * as env from '../env';

const router: express.Router = express.Router();
const pusher: Pusher = new Pusher({ 
  appId: env.PUSHER_APP_ID,
  key: env.PUSHER_KEY,
  secret: env.PUSHER_KEY,
});

const hello
: (router: express.Router) => express.Router
= router => router.get('/', (req, res) => res.send('It works'));

const pusherAuth
: (router: express.Router) => express.Router
= router => router.post('/pusher/auth', (req, res) => {
  const { socket_id, channel } = req.body;
  console.log(socket_id, channel);
});

export const api
: (app: express.Application) => express.Application
= app => app.use('/', R.pipe(
  hello,
)(router));
