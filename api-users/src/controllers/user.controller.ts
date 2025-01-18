import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import generateJWT from '../helpers/generateJWT';

const prisma = new PrismaClient();

const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        const userExists = await prisma.user.findFirst({
            where: {
                email
            }
        })

        if (userExists !== null) {
            return res.status(409).json({ message: "El usuario ya existe" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        })

        return res.status(200).json({ message: "Usuario registrado correctamente" });
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        const user = await prisma.user.findFirst({
            where: {
                email
            },
            select: {
                password: true,
                id: true,
                name: true
            }
        })

        if (user === null) {
            return res.status(404).json({ message: "El usuario no existe" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }

        const token = generateJWT(user.id, user.name);

        res.cookie('auth-token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            expires: new Date(Date.now() + 1000 * 60 * 60 * 12),
        })

        return res.status(200).json({ message: "Usuario logueado correctamente" });
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

const logout = async (req: Request, res: Response) => {
    try {
        res.clearCookie('auth-token', {
            httpOnly: true,
            secure: true,
            sameSite: 'none'
        })
        return res.status(200).json({ message: "Usuario deslogueado correctamente" });
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

export {
    register,
    login,
    logout
}
