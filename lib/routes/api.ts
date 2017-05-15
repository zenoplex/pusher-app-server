import * as R from 'ramda';
import * as express from 'express';

const router: express.Router = express.Router();

const hello
: (router: express.Router) => express.Router
= router => router.get('/', (req, res) => res.send('all good'));

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
