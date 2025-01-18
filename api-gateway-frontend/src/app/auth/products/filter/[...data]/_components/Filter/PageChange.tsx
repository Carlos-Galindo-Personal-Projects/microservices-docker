"use client"

import { PageChangeProps } from "@/types/components";
import { useRouter } from "next/navigation";

export default function PageChange({ currentCategoryId, setCurrentPage, currentPage, next }: PageChangeProps) {

    const router = useRouter();

    const handleDecrease = () => {
        if (currentPage > 1) {
            const pastPage = currentPage - 1;
            setCurrentPage(pastPage);
            router.push(`/auth/products/filter/${pastPage}/${currentCategoryId}`);
        }
    };

    const handleIncrease = () => {
        const nextValue = currentPage + 1;
        setCurrentPage(nextValue);
        router.push(`/auth/products/filter/${nextValue}/${currentCategoryId}`);
    };


    return (
        <div className="flex justify-center space-x-4 my-6">
            <button
                disabled={currentPage === 1}
                className="bg-[#ffb300] dark:bg-[#940533] px-2 rounded-md disabled:opacity-50 font-bold"
                onClick={() => handleDecrease()}
            >
                {"<"}
            </button>
            <button
                disabled={!next}
                className="bg-[#ffb300] dark:bg-[#940533] px-2 rounded-md disabled:opacity-50 font-bold"
                onClick={() => handleIncrease()}
            >
                {">"}
            </button>
        </div>
    )
}
