import { Request, Response, Router } from "express";
import { createProduct, deleteProduct, getProduct, getProductsByCategory, updateProduct, getProductWithCategory, filterProducts } from "../controllers/product.controller";

const router = Router();

router.get('/all/:categoryId?', (req: Request, res: Response) => {
    getProductsByCategory(req, res);
})

router.get('/one/:id', (req: Request, res: Response) => {
    getProduct(req, res);
})

router.get('/one/edit/:id', (req: Request, res: Response) => {
    getProductWithCategory(req, res);
})

router.get('/filter/:page/:categoryId?', (req: Request, res: Response) => {
    filterProducts(req, res);
})

router.post('/', (req: Request, res: Response) => {
    createProduct(req, res);
})

router.put('/:id', (req: Request, res: Response) => {
    updateProduct(req, res);
})

router.delete('/:id', (req: Request, res: Response) => {
    deleteProduct(req, res);
})

export default router;
