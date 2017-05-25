import * as express from 'express';
import * as cors from 'cors';

export const xDomain
: (app: express.Application) => express.Application
= app => app.use(cors());
