import { cookies } from "next/headers"
import { ResponseCategories, ResponseMessage } from "@/types/response"
import AddProductForm from "./AddProductForm";

export default async function AddProduct() {

    const cookieStore = await cookies()
    const authCookie = cookieStore.get("auth-token")

    let msg;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}categories`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Cookie": `auth-token=${authCookie?.value}`
        }
    })

    if (!response.ok) {
        const message: ResponseMessage = await response.json()
        msg = message.message
        return (
            <div className="flex flex-col my-36">
                <div className="flex-grow container m-auto">
                    <h2 className="text-5xl font-bold dark:text-[#e8e8e8] text-[#333333] text-center mt-12">
                        {msg}
                    </h2>
                </div>
            </div>
        )
    }

    const categories: ResponseCategories[] = await response.json()

    return (
        <AddProductForm categories={categories} />
    )
}
