import { z } from "zod";

const registerSchema = z.object({
    name: z
        .string({ required_error: "El nombre es obligatorio" })
        .min(12, { message: "El correo electrónico debe contener como mínimo 12 caracteres" })
        .max(64, { message: "El correo electrónico debe contener como máximo 64 caracteres" }),
    email: z
        .string({ required_error: "El email es obligatorio" })
        .email({ message: "Ingrese un email válido" })
        .min(12, { message: "El correo electrónico debe contener como mínimo 12 caracteres" })
        .max(64, { message: "El correo electrónico debe contener como máximo 64 caracteres" }),
    password: z
        .string({ required_error: "La contraseña es obligatoria" })
        .min(6, { message: "La contraseña debe contener como mínimo 6 caracteres" })
        .max(16, { message: "La contraseña debe contener como máximo 16 caracteres" }),
    repeatPassword: z
        .string()
})
    .refine(data => data.password === data.repeatPassword, {
        message: "Las contraseñas no coinciden"
    })

export default registerSchema;
