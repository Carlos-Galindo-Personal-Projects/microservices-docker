"use client";

import { useEffect, useState } from "react";
import CategorySelector from "./Filter/CategorySelector";
import { FilteredProductsProps } from "@/types/components";
import PageChange from "./Filter/PageChange";
import { ResponseFilteredProducts, ResponseMessage, ResponseProducts } from "@/types/response";
import ProductCards from "./Filter/ProductCards";
import FilteredProductsSkeleton from "./Skeleton/FilteredProductsSkeleton";

export default function FilteredProducts({categories, page, categoryId}: FilteredProductsProps) {

    const [currentPage, setCurrentPage] = useState<number>(page);
    const [currentCategoryId, setCurrentCategoryId] = useState<number>(categoryId);
    const [products, setProducts] = useState<ResponseProducts[]>([]);
    const [message, setMessage] = useState<string>('');
    const [next, setNext] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {

        const filterProducts = async () => {

            setLoading(true);
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}products/filter/${currentPage}/${currentCategoryId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            if (!response.ok) {
                const message: ResponseMessage = await response.json();
                setMessage(message.message);
                setLoading(false);
                return;
            }

            try {
                const filteredProducts: ResponseFilteredProducts = await response.json();
                const products: ResponseProducts[] = filteredProducts.products;
                const areMoreProducts: boolean = filteredProducts.areMoreProducts;

                setProducts(products);
                setNext(areMoreProducts);
            } catch {
                setMessage("There are no products for showing");
            } finally {
                setLoading(false);
            }

        }

        filterProducts();
    }, [currentPage, currentCategoryId]);

    if (loading) {
        return (
            <FilteredProductsSkeleton />
        )
    }

    return (
        <>
            <PageChange next={next} currentCategoryId={currentCategoryId} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            <CategorySelector categories={categories} currentCategoryId={currentCategoryId} setCurrentCategoryId={setCurrentCategoryId} currentPage={currentPage} />
            <ProductCards products={products} msg={message} />
        </>
    )
}
