"use client"

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col items-center h-screen w-screen overflow-x-hidden">
            <div className="flex justify-end w-full p-4 space-x-4 md:space-x-8">
                <Link
                    href="/no-auth/login"
                    className="text-lg font-semibold bg-[#ffb300] dark:bg-[#ff8800] hover:bg-opacity-90 rounded-lg py-2 px-6 shadow-md transition-transform transform hover:scale-105 text-[#333333]"
                >
                    Login
                </Link>
                <Link
                    href="/no-auth/register"
                    className="text-lg font-semibold bg-[#ffb300] dark:bg-[#ff8800] hover:bg-opacity-90 rounded-lg py-2 px-6 shadow-md transition-transform transform hover:scale-105 text-[#333333]"
                >
                    Register
                </Link>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col space-y-4 w-3/5 mb-8"
                >
                    <div className="flex flex-col items-center space-y-8">
                        <motion.div
                            whileHover={{ scale: 1.15 }}
                            className="hover:cursor-pointer"
                        >
                            <h1 className="text-9xl font-extrabold my-12 text-center">
                                Products CRUD App
                            </h1>
                        </motion.div>
                        <div className="flex flex-col justify-center items-center space-y-6 text-center px-4 md:px-8">
                            <section>
                                <h2 className="text-7xl font-semibold mb-8">Used Technologies</h2>
                                <div className="w-1/2 container mx-auto space-y-4">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="hover:cursor-pointer"
                                    >

                                        <Image
                                            src="https://skillicons.dev/icons?i=nextjs,tailwind,npm,ts" alt="icons"
                                            width={1000}
                                            height={800}
                                        />
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="hover:cursor-pointer"
                                    >
                                        <Image
                                            src="https://skillicons.dev/icons?i=nodejs,express,postgres,prisma" alt="icons"
                                            width={1000}
                                            height={800}
                                        />
                                    </motion.div>
                                </div>
                            </section>
                            <section>
                                <h2 className="text-7xl font-semibold mb-8">Architecture</h2>

                                <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="hover:cursor-pointer w-3/4 container mx-auto space-y-4"
                                    >
                                    <Image
                                        src="/architecture.svg" alt="icons"
                                        width={1500}
                                        height={100}
                                    />
                                </motion.div>
                            </section>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
