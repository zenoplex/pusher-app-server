import * as express from 'express';
import * as bodyParser from 'body-parser';

export const parser
: (app: express.Application) => express.Application
= app => app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }));
