"use client"

import { productSchema } from "@/schemas/product.schema";
import { ResponseCategories, ResponseEditProduct, ResponseMessage } from "@/types/response";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FieldErrors, useForm } from "react-hook-form";

export default function AddProductForm({ categories }: { categories: ResponseCategories[] }) {

    const router = useRouter();

    const { register, handleSubmit } = useForm<ResponseEditProduct>({
        resolver: zodResolver(productSchema)
    });

    const onSuccess = async (data: ResponseEditProduct) => {
        try {

            const { name, description, amount, price, categoryId } = data;

            const newProduct = {
                name,
                description,
                amount,
                price,
                categoryId: categoryId
            }

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}products`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct),
                credentials: "include"
            });

            if (!response.ok) {
                const message: ResponseMessage = await response.json();
                alert(message.message);
                return
            }

            const message: ResponseMessage = await response.json();
            alert(message.message);
            router.push("/auth");
        } catch {
            alert("Ha ocurrido un error");
        }
    }

    const onError = (errors: FieldErrors<ResponseEditProduct>) => {
        let stringErrors = '';
        Object.entries(errors).forEach(([, value]) => {
            stringErrors += value.message + '\n' || '';
        });
        alert(stringErrors);
    };

    return (
        <div className="flex items-center justify-center p-4 mt-8">
            <div className="bg-[#333333] dark:bg-[#e8e8e8] rounded-lg shadow-lg p-6 w-full max-w-md">
                <form onSubmit={handleSubmit(onSuccess, onError)} >
                    <div className="mb-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#e8e8e8] dark:text-[#333333]">Add Product</h2>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-[#e8e8e8] dark:text-[#333333]">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            {...register("name")}
                            placeholder="correo@correo.com"
                            className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-[#ffb300] focus:border-[#ffb300]"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="description" className="block text-sm font-medium text-[#e8e8e8] dark:text-[#333333]">
                            Description
                        </label>
                        <input
                            id="description"
                            type="text"
                            placeholder="Description"
                            {...register("description")}
                            className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-[#ffb300] focus:border-[#ffb300]"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="price" className="block text-sm font-medium text-[#e8e8e8] dark:text-[#333333]">
                            Price
                        </label>
                        <input
                            id="price"
                            type="number"
                            placeholder="Price"
                            min={1}
                            step={0.5}
                            {...register("price", { setValueAs: (value: string) => Number(value) })}
                            className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-[#ffb300] focus:border-[#ffb300]"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="amount" className="block text-sm font-medium text-[#e8e8e8] dark:text-[#333333]">
                            Amount
                        </label>
                        <input
                            id="amount"
                            type="number"
                            placeholder="Amount"
                            min={1}
                            {...register("amount", { setValueAs: (value: string) => Number(value) })}
                            className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-[#ffb300] focus:border-[#ffb300]"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="categoryId"
                            className="block text-sm font-medium text-[#e8e8e8] dark:text-[#333333]"
                        >
                            Category
                        </label>
                        <select
                            id="categoryId"
                            {...register("categoryId", {
                                setValueAs: (value: string) => Number(value),
                                required: "Please select a category",
                            })}
                            className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-[#ffb300] focus:border-[#ffb300]"
                        >
                            <option value="" disabled>
                                Select a category
                            </option>
                            {
                                categories && categories.length > 0 ? (
                                    categories.map((category, key) => (
                                        <option value={category.id} key={key}>{category.name}</option>
                                    ))
                                ) : (
                                    <option value="" disabled>No hay categorias</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full dark:bg-[#ffb300] bg-[#c0012a] dark:hover:bg-[#e0a000] hover:bg-[#940533] dark:text-black font-medium rounded-lg px-4 py-2 transition duration-200 text-white"
                        >
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
