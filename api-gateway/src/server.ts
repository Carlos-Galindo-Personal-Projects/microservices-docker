import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import { createProxyMiddleware } from "http-proxy-middleware";
import cookieParser from "cookie-parser";

import authMiddleware from "./helpers/authMiddleware";
import services from "./services/services";
import { RequestCounterInterface } from "./types/types";

const app = express();

dotenv.config();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
app.use(helmet());
app.use(morgan("combined"));
app.disable("x-powered-by");
app.use(cookieParser());

const rateLimit = 60;
const interval = 60 * 1000;

const requestCounter = {} as RequestCounterInterface;

setInterval(() => {
    Object.keys(requestCounter).forEach((ip) => {
        requestCounter[ip] = 0;
    });
}, interval);

function rateLimitAndTimeout(req: Request, res: Response, next: NextFunction) {
    const ip = req.ip;

    if (!ip) {
        res.status(400).send({ message: "Dirección IP no encontrada" });
        return;
    }

    requestCounter[ip] = requestCounter[ip] ? requestCounter[ip] + 1 : 1;

    if (requestCounter[ip] > rateLimit) {
        res.status(429).send({ message: "Demasiadas solicitudes" })
        return;
    }

    req.setTimeout(1000, () => {
        res.status(504).json({ message: "Tiempo de espera agotado" });
        return;
    });

    next();
}

app.use(rateLimitAndTimeout);

services.forEach(({ route, target }) => {
    const proxyOptions = {
        target,
        changeOrigin: true,
        pathRewrite: {
            [`^${route}`]: "",
        },
    }

    if (route === "/products" || route === "/categories") {
        app.use(route, authMiddleware, rateLimitAndTimeout, createProxyMiddleware(proxyOptions));
        return
    }
    app.use(route, rateLimitAndTimeout, createProxyMiddleware(proxyOptions));
});

app.use((_req: Request, res: Response) => {
    res.status(404).send({ message: "Ruta no encontrada" });
    return;
});

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
