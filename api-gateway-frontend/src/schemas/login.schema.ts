import { z } from "zod";

const loginSchema = z.object({
    email: z
        .string({ required_error: "El email es obligatorio" })
        .email({ message: "Ingrese un email válido" })
        .min(12, { message: "El correo electrónico debe contener como mínimo 12 caracteres" })
        .max(64, { message: "El correo electrónico debe contener como máximo 64 caracteres" }),
    password: z
        .string({ required_error: "La contraseña es obligatoria" })
        .min(6, { message: "El correo electrónico debe contener como mínimo 6 caracteres" })
        .max(16, { message: "La contraseña debe contener como máximo 16 caracteres" })
});

export default loginSchema;
