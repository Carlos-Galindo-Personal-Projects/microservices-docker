import { Suspense } from "react";
import Product from "./_components/Product";
import FormSkeleton from "../../_components/FormSkeleton";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <Suspense fallback={<FormSkeleton />}>
            <Product id={id} />
        </Suspense>
    );
}
