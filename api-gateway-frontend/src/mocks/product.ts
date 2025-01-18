import { ResponseEditProduct, ResponseProducts } from "@/types/response";

const productResponse: ResponseProducts = {
    id: 1,
    name: "Producto 1",
    price: 100,
    description: "Descripción del producto 1",
    amount: 10,
    category: {
        name: "Categoría 1"
    }
}

const productEdit: ResponseEditProduct = {
    id: 1,
    name: "Producto 1",
    price: 100,
    description: "Descripción del producto 1",
    amount: 10,
    category: {
        id: 1
    }
}

export { productResponse, productEdit }
