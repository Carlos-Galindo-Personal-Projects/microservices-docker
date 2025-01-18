export default function ProductSkeleton() {
    return (
        <article className="p-8 rounded-lg space-y-6 w-2/6 container m-auto h-full mt-12 animate-pulse bg-[#333333] dark:bg-[#e8e8e8]">
            <div className="h-6 dark:bg-[#333333] bg-[#e8e8e8] rounded w-1/2"></div>
            <div className="h-4 dark:bg-[#333333] bg-[#e8e8e8] rounded w-full"></div>
            <div className="flex justify-between items-center">
                <span className="h-4 dark:bg-[#333333] bg-[#e8e8e8] rounded w-1/3"></span>
                <span className="h-4 dark:bg-[#333333] bg-[#e8e8e8] rounded w-1/3"></span>
            </div>
            <div className="h-4 dark:bg-[#333333] bg-[#e8e8e8] rounded w-full"></div>
            <div className="bg-blue-600 h-10 rounded-lg mt-6"></div>
        </article>
    )
}
