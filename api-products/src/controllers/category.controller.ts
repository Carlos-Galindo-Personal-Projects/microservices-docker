import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await prisma.category.findMany({
            select: {
                id: true,
                name: true
            }
        });

        if (categories.length === 0) {
            return res.status(204).json({ message: "No hay categorías" });
        }

        return res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

const addCategory = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ message: "El campo nombre es obligatorio" });
        }

        const categoryExists = await prisma.category.findFirst({
            where: {
                name
            }
        });

        if (categoryExists !== null) {
            return res.status(409).json({ message: "La categoría ya existe" });
        }

        await prisma.category.create({
            data: {
                name
            }
        });

        return res.status(201).json({ message: "Categoría creada correctamente" });
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}

export {
    getCategories,
    addCategory
};
