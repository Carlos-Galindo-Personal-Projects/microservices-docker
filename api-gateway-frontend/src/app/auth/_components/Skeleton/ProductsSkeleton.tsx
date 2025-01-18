export default function ProductsSkeleton() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from(Array(6).keys()).map((skeleton) => (
                <div
                    key={skeleton}
                    className="animate-pulse bg-gray-700 dark:bg-gray-200 p-6 rounded-lg shadow-md flex flex-col space-y-4"
                >
                    <div className="h-4 bg-gray-500 dark:bg-gray-500 w-3/4 rounded"></div>
                    <div className="h-3 bg-gray-500 dark:bg-gray-500 w-1/4 rounded"></div>
                    <div className="h-10 bg-gray-500 dark:bg-gray-500 rounded"></div>
                    <div className="flex justify-between items-center">
                        <div className="h-4 bg-gray-500 dark:bg-gray-500 w-1/4 rounded"></div>
                        <div className="h-3 bg-gray-500 dark:bg-gray-500 w-1/3 rounded"></div>
                    </div>
                    <div className="mt-4 h-8 bg-blue-400 rounded-lg"></div>
                </div>
            ))}
        </div>
    );
}
