export interface ResponseMessage {
    message: string;
}

export interface ResponseProducts {
    id: number;
    name: string;
    price: number;
    description: string;
    amount: number;
    category: {
        name: string;
    };
}

export interface ResponseEditProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    amount: number;
    categoryId: number;
}

export interface ResponseCategories {
    id: number;
    name: string;
}

export interface ResponseFilteredProducts {
    products: ResponseProducts[];
    areMoreProducts: boolean;
}
