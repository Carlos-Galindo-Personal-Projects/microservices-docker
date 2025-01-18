"use client"

import { FieldErrors, useForm } from "react-hook-form";
import registerSchema from "@/schemas/register.schema";
import { UserRegister } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResponseMessage } from "@/types/response";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function RegisterPage() {

    const router = useRouter();

    const { register, handleSubmit } = useForm<UserRegister>({
        resolver: zodResolver(registerSchema),
    });

    const onSuccess = async (data: UserRegister) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users/register`, {
                method: "POST",
                body: JSON.stringify({ name: data.name, email: data.email, password: data.password }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const message: ResponseMessage = await response.json();
            alert(message.message + '\n' + 'Por favor inicia sesión');
            router.push('/no-auth/login');
        } catch {
            alert("Error al registrar usuario");
        }
    }

    const onError = (errors: FieldErrors<UserRegister>) => {
        let stringErrors = '';
        Object.entries(errors).forEach(([, value]) => {
            stringErrors += value.message + '\n' || '';
        });
        alert(stringErrors);
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }} >
                <div className="flex items-center justify-center p-4">
                    <div className="bg-white dark:bg-[#333333] rounded-lg shadow-lg dark:shadow-[#ffb300] shadow-[#940533] p-6 w-full">
                        <form onSubmit={handleSubmit(onSuccess, onError)}>
                            <div className="mb-6 text-center">
                                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white">Register</h2>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    {...register("name")}
                                    className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-[#ffb300] focus:border-[#ffb300]"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="text"
                                    placeholder="correo@correo.com"
                                    {...register("email")}
                                    className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-[#ffb300] focus:border-[#ffb300]"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="********"
                                    {...register("password")}
                                    className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-[#ffb300] focus:border-[#ffb300]"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="repeatPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Repeat Password
                                </label>
                                <input
                                    id="repeatPassword"
                                    type="password"
                                    placeholder="********"
                                    {...register("repeatPassword")}
                                    className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-[#ffb300] focus:border-[#ffb300]"
                                />
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="w-full dark:bg-[#ffb300] bg-[#c0012a] dark:hover:bg-[#e0a000] hover:bg-[#940533] dark:text-black font-medium rounded-lg px-4 py-2 transition duration-200 text-white"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
