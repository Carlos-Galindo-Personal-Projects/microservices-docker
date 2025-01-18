import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const cookie = req.cookies["auth-token"];
        if (!cookie) {
            res.status(401).json({ message: "Token no proporcionado" });
            return;
        }

        const secret = process.env.JWT_SECRET;
        if (!secret) {
            res.status(500).json({ message: "JWT_SECRET no está definido" });
            return;
        }

        const decoded = jwt.verify(cookie, secret) as JwtPayload;

        req.user = decoded;

        next();
    } catch (error: any) {
        if (error.name === "JsonWebTokenError") {
            res.status(401).json({ message: "Token inválido" });
            return;
        }
        res.status(500).json({ message: "Error interno del servidor" });
        return;
    }
};

export default authMiddleware;
