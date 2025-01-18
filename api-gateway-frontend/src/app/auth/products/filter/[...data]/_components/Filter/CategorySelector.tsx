import { CategorySelectorProps } from "@/types/components";
import { useRouter } from "next/navigation";

export default function CategorySelector({ categories, currentCategoryId, setCurrentCategoryId, currentPage }: CategorySelectorProps) {

    const router = useRouter();

    const handleChange = (value: string) => {
        setCurrentCategoryId(parseInt(value));
        router.push(`/auth/products/filter/${currentPage}/${value}`);
    }

    return (
        <div className="mb-6">
            <label
                htmlFor="categoryId"
                className="block text-sm font-medium"
            >
                Category
            </label>
            <select
                className="mt-1 block w-full border border-[#ffb300] dark:border-[#940533] rounded-lg px-3 py-2 dark:bg-[#e8e8e8] dark:text-[#333333] text-[#e8e8e8] bg-[#333333] dark:focus:ring-[#940533] dark:focus:border-[#940533] focus:ring-[#ffb300] focus:border-[#ffb300] sm:text-sm"
                name="categoryId"
                id="categoryId"
                value={currentCategoryId}
                onChange={(e) => handleChange(e.target.value)}
            >
                <option value={0}>
                    All
                </option>
                {
                    categories && categories.length > 0 ? (
                        categories.map((category, key) => (
                            <option value={category.id} key={key}>{category.name}</option>
                        ))
                    ) : (
                        <option value="" disabled>No hay categorias</option>
                    )
                }
            </select>
        </div>
    );
}
