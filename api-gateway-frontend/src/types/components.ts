import { Dispatch, SetStateAction } from "react";
import { ResponseCategories } from "./response";

export interface FilteredProductsProps {
    categories: ResponseCategories[];
    page: number;
    categoryId: number
}

export interface CategorySelectorProps {
    categories: ResponseCategories[];
    currentCategoryId: number;
    setCurrentCategoryId: Dispatch<SetStateAction<number>>;
    currentPage: number;
}

export interface PageChangeProps {
    currentCategoryId: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
    currentPage: number;
    next: boolean;
}
