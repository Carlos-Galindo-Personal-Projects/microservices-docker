import { ResponseMessage, ResponseProducts } from "@/types/response";
import { cookies } from "next/headers";
import Link from "next/link";
import DeleteProduct from "./DeleteProduct";

export default async function Product({ id }: { id: string }) {

    const cookieStore = await cookies();
    const authCookie = cookieStore.get("auth-token");

    let msg;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}products/one/${id}`, {
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

    const product: ResponseProducts = await response.json();

    return (
        <article
            className="p-8 rounded-lg space-y-6 w-2/6 container m-auto h-full mt-12 dark:bg-[#e8e8e8] bg-[#333333]"
        >
            <h2 className="text-2xl font-bold text-[#e8e8e8] dark:text-[#333333]">{product.name}</h2>
            <p className="text-[#e8e8e8] dark:text-[#333333]">{product.description}</p>
            <div className="flex justify-between items-center">
                <span className="text-xl font-semibold text-blue-300 dark:text-[#0056b3]">
                    ${product.price}
                </span>
                <span className="text-base text-[#e8e8e8] dark:text-[#333333]">
                    {product.amount} disponibles
                </span>
            </div>
            <p className="text-base text-[#e8e8e8] dark:text-[#333333]">
                Categoría: <span className="font-medium">{product.category.name}</span>
            </p>
            <Link href={`/auth/products/edit/${product.id}`}>
                <div
                    className="bg-blue-600 text-white text-center py-2 px-6 mt-6 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Edit
                </div>
            </Link>
            <DeleteProduct id={product.id} />
        </article>
    );
}
