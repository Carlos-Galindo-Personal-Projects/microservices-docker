import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#ffb300] dark:bg-[#940533] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10 py-8">
            <div className="flex flex-col items-start">
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-2">
                    Carlos Galindo Personal Project
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    Exploring development and knowledge.
                </p>
            </div>
            <div className="flex flex-col items-start">
                <h2 className="text-lg font-medium mb-2">Code Repository</h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    You can find the code in the following link:
                </p>
                <Link
                    href="https://github.com/Carlos-Galindo-Personal-Projects/microservices-api"
                    className="dark:text-[#E5E5E5] text-[#00274D] hover:underline"
                >
                    GitHub Repo
                </Link>
            </div>
            <div className="flex flex-col items-start">
                <h2 className="text-lg font-medium mb-2">About Me</h2>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>
                        <Link href="https://github.com/CarlosGal19" className="dark:text-[#E5E5E5] text-[#00274D] hover:underline">
                            Github Profile
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.linkedin.com/in/carlosgalindoislas/" className="dark:text-[#E5E5E5] text-[#00274D] hover:underline">
                            LinkedIn Profile
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/Carlos-Galindo-Personal-Projects" className="dark:text-[#E5E5E5] text-[#00274D] hover:underline">
                            Portfolio
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col items-start">
                <h2 className="text-lg font-medium mb-2">Contact Info</h2>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>Email: c.galindo.islas@gmail.com</li>
                    <li>Phone: +52 449-512-09-93</li>
                    <li>Location: Aguascalientes, México</li>
                </ul>
            </div>
        </footer>
    )
}
