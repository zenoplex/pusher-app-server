import * as express from 'express';

export const listen
: (port: number) => (app: express.Application) => Promise<string>
= port => app => new Promise((resolve, reject) => 
  app.listen(port, (error: string) => error ? reject(error) : resolve(`http://localhost:${port}`)));
