"use client"

import { ResponseMessage } from "@/types/response"
import { useRouter } from "next/navigation"

export default function LogoutButton() {

    const router = useRouter();

    const handleClick = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users/logout`, {
                method: "POST",
                credentials: "include"
            });

            if(!response.ok) {
                const msg: ResponseMessage = await response.json()
                alert(msg.message)
            }

            const msg: ResponseMessage = await response.json();
            alert(msg.message)
            router.push("/no-auth/login")
        } catch {
            alert("Ha ocurrido un error al intentar cerrar sesión")
        }
    }

    return (
        <button
            className="dark:bg-[#ffb300] bg-[#940533] dark:text-black text-white font-bold p-1 px-4 rounded"
            onClick={handleClick}
        >
            Logout
        </button>
    )
}
