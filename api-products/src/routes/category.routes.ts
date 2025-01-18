import { Request, Response, Router } from "express";
import { getCategories, addCategory } from "../controllers/category.controller";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    getCategories(req, res);
})

router.post('/', (req: Request, res: Response) => {
    addCategory(req, res);
})

export default router;
