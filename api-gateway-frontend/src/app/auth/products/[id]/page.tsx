import { Suspense } from "react";
import Product from "./_components/Product";
import ProductSkeleton from "./_components/Skeleton/ProductSkeleton";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <Suspense fallback={<ProductSkeleton />}>
            <Product id={id} />
        </ Suspense>
    );
}
