export default function FormSkeleton() {
    return (
        <div className="flex items-center justify-center p-4 mt-8 animate-pulse">
            <div className="bg-gray-700 dark:bg-gray-200 rounded-lg shadow-lg p-6 w-full max-w-md">
                <form>
                    <div className="mb-6 text-center">
                        <div className="h-6 bg-gray-200 dark:bg-gray-700 w-1/2 container mx-auto"></div>
                    </div>
                    <div className="mb-4">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 w-1/4"></div>
                        <div className="mt-1 block w-full bg-gray-200 dark:bg-gray-700 h-10 rounded-lg"></div>
                    </div>
                    <div className="mb-6">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 w-1/4"></div>
                        <div className="mt-1 block w-full bg-gray-200 dark:bg-gray-700 h-10 rounded-lg"></div>
                    </div>
                    <div className="mb-6">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 w-1/4"></div>
                        <div className="mt-1 block w-full bg-gray-200 dark:bg-gray-700 h-10 rounded-lg"></div>
                    </div>
                    <div className="mb-6">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 w-1/4"></div>
                        <div className="mt-1 block w-full bg-gray-200 dark:bg-gray-700 h-10 rounded-lg"></div>
                    </div>
                    <div className="mb-6">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 w-1/4"></div>
                        <div className="mt-1 block w-full bg-gray-200 dark:bg-gray-700 h-10 rounded-lg"></div>
                    </div>
                    <div className="text-center">
                        <button type="button" className="w-full bg-gray-500 dark:bg-gray-200 dark:text-gray-500 font-medium rounded-lg px-4 py-2">
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
