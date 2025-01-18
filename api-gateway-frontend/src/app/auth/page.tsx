import { Suspense } from "react";
import Products from "./_components/Products";
import ProductsSkeleton from "./_components/Skeleton/ProductsSkeleton";

export default function Dashboard() {
    return (
        <>
            <h2
                className="text-center text-4xl font-bold py-8"
            >
                Manage your products
            </h2>
            <Suspense fallback={<ProductsSkeleton />}>
                <Products />
            </Suspense>
        </>
    )
}
