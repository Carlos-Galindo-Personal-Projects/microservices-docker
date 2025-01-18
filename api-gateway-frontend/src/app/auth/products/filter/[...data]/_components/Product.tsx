import { ResponseCategories, ResponseMessage } from "@/types/response";
import { cookies } from "next/headers";
import FilteredProducts from "./FilteredProducts";


export default async function Product({ page, categoryId }: { page: number, categoryId: number }) {

    const storeCookies = await cookies();
    const token = storeCookies.get("auth-token");

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}categories`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "Cookie": `auth-token=${token?.value}`
        },
    });

    if (!response.ok) {

        const message: ResponseMessage = await response.json();
        const msg = message.message;

        return (
            <div className="flex flex-col my-36">
                <div className="flex-grow container m-auto">
                    <h2 className="text-5xl font-bold dark:text-[#e8e8e8] text-[#333333] text-center mt-12">
                        {msg}
                    </h2>
                </div>
            </div>
        )
    }

    const categories: ResponseCategories[] = await response.json();

    return (
        <>
            <FilteredProducts categories={categories} page={page} categoryId={categoryId} />
        </>
    );
}
