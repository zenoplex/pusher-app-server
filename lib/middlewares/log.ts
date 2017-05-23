import * as express from 'express';
import * as morgan from 'morgan';

export const log
:(format?: string) => (app: express.Application) => express.Application
= (format = 'combined')  => app => app.use(morgan(format));
