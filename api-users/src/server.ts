import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import userRoutes from './routes/user.routes'

const app = express();

dotenv.config();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}))

app.use(express.json());

app.use(cookieParser());

app.use('/users', userRoutes);

app.use((_req: Request, res: Response) => {
  res.status(404).send({ message: "Ruta no encontrada" });
  return;
});

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
