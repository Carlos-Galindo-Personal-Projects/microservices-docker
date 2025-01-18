import { z } from 'zod';

export const productSchema = z.object({
    name: z
        .string({ message: "El nombre es obligatorio" })
        .min(3, { message: "El nombre debe contener como mínimo 3 caracteres" })
        .max(64, { message: "El nombre debe contener como máximo 64 caracteres" }),
    description: z
        .string(),
    price: z
        .number({ message: "El precio es obligatorio" })
        .min(1, { message: "El precio debe ser mayor a 0" }),
    amount: z
        .number({ message: "La cantidad es obligatoria" })
        .min(0, { message: "La cantidad debe ser mayor o igual a 0" })
        .int({ message: "La cantidad debe ser un número entero" }),
    categoryId: z
        .number({ message: "La categoría es obligatoria" })
        .min(1, { message: "La categoría es obligatoria" })
        .int({ message: "El id de la categoría debe ser un número entero" })
});
