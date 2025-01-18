import Link from "next/link";

export default function NoAuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="flex flex-col items-center h-screen bg-gradient-to-r dark:from-[#ff8800] dark:via-[#c0012a] dark:to-[#940533] from-[#ffb300] to-[#c0012a] via-[#ff8800]">
            <div className="flex justify-end w-full p-4 space-x-4 md:space-x-8">
                <Link
                    href="/"
                    className="text-lg font-semibold bg-[#ffb300] dark:bg-[#ff8800] hover:bg-opacity-90 rounded-lg py-2 px-6 shadow-md transition-transform transform hover:scale-105"
                >
                    Home
                </Link>
            </div>
            <div className="container m-auto w-1/4">
                {children}
            </div>
        </div>
    )
}
