import * as R from 'ramda';
import * as express from 'express';
import * as http from 'http';
import { parser } from './middlewares/parser';
import { xDomain } from './middlewares/cors';
import { listen } from './middlewares/listen';
import { api } from './routes/api';

const port = process.env.PORT || '3000';
const app = express();
const start
: (app: express.Application) => Promise<string>
= app => R.pipe(
  parser,
  xDomain,
  api,
  listen(port),
)(app);

start(app).then(console.log);
