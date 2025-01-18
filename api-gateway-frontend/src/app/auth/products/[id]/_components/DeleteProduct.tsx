"use client"

import { ResponseMessage } from "@/types/response";
import { useRouter } from "next/navigation";

export default function DeleteProduct({ id }: { id: number }) {

    const router = useRouter();

    const handleClick = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}products/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })

            if (!response.ok) {
                const message: ResponseMessage = await response.json()
                alert(message.message)
                return;
            }

            const message: ResponseMessage = await response.json()
            alert(message.message);
            router.push("/auth");
        } catch {
            alert("Ha ocurrido un error");
        }
    }

    return (
        <div
            className="bg-red-600 text-white text-center py-2 px-6 mt-6 rounded-lg hover:bg-red-700 transition duration-300"
            onClick={handleClick}
        >
            Remove
        </div>
    )
}
