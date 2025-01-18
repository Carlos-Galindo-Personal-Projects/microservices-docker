import { Suspense } from "react";
import AddProduct from "./_components/Product";
import FormSkeleton from "../_components/FormSkeleton";

export default function Page() {
    return (
        <Suspense fallback={<FormSkeleton />}>
            <AddProduct />
        </Suspense>
    )
}
