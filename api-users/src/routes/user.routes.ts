import { Request, Response, Router } from "express";
import { register, login, logout } from "../controllers/user.controller";
import authMiddleware from "../helpers/authMiddleware";

const router = Router();

router.post('/register', (req: Request, res: Response) => {
    register(req, res);
});

router.post('/login', (req: Request, res: Response) => {
    login(req, res);
});

router.post('/logout', authMiddleware, (req: Request, res: Response) => {
    logout(req, res);
});

export default router;
