import { ResponseProducts } from "@/types/response";
import Link from "next/link";

export default function ProductCards({ products, msg }: { products: ResponseProducts[], msg: string }) {
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
                    <div className="text-center text-5xl font-bold">
                        {msg}
                    </div>
                )
            }
        </div>
    )
}
