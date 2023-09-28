import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { readFile } from 'fs/promises';
import { resolve } from 'path';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/contacts', async (req: Request, res: Response) => {
  const contacts = await readFile(resolve(__dirname, '..', '..', 'database', 'contacts.json'), { encoding: 'utf-8' });
  res.json(JSON.parse(contacts)).status(200);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});