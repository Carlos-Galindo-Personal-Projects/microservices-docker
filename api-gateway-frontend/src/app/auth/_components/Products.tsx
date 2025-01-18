import { ResponseMessage, ResponseProducts } from "@/types/response";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Products() {

    const cookieStore = await cookies();
    const authCookie = cookieStore.get("auth-token");

    let msg;
    let products: ResponseProducts[] = [];
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}products/all`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Cookie": `auth-token=${authCookie?.value}`
        }
    })

    if (!response.ok) {
        const message: ResponseMessage = await response.json()
        msg = message.message
        return;
    }

    try {
         products = await response.json();
    } catch {
        return (
            <h2
                className="text-3xl text-center my-32 font-semibold"
            >
                There are no products for showing
            </h2>
        );
    }



    return (
        <div className={`grid ${products && products.length > 0 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'h-[300px] flex items-center justify-center'} my-8`}>
            {
                products && products.length > 0 ? (
                    products.map((product, key) => (
                        <div key={key}
                            className={`bg-[#333333] dark:bg-[#e8e8e8] p-6 rounded-lg shadow-md flex flex-col space-y-4`}
                        >
                            <h2 className="text-2xl font-bold dark:text-[#333333] text-[#e8e8e8]">{product.name}</h2>
                            <p className="dark:text-[#333333] text-[#e8e8e8] text-sm">{product.category.name}</p>
                            <p className="dark:text-[#333333] text-[#e8e8e8]">{product.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold dark:text-[#333333] text-[#e8e8e8]">${product.price}</span>
                                <span className="text-sm dark:text-[#333333] text-[#e8e8e8]">Stock: {product.amount}</span>
                            </div>
                            <Link
                                className="mt-4 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                                href={`auth/products/${product.id}`}
                            >
                                Show details
                            </Link>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-2xl font-bold">
                        {msg}
                    </div>
                )
            }
        </div>
    )
}
