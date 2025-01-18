import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import productRoutes from './routes/product.routes';
import categoryRoutes from './routes/category.routes';

const app = express();

dotenv.config();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}))

app.use(express.json());

app.use('/products', productRoutes)
app.use('/categories', categoryRoutes)

app.use((_req: Request, res: Response) => {
    res.status(404).send({ message: "Ruta no encontrada" });
    return;
});

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3002;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
