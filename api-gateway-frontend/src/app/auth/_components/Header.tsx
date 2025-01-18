import { headers } from "next/headers";
import ProductIcon from "./Icons/Product";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default async function Header() {

    const head = await headers();

    const name = head.get('User-Name');

    const routes = [
        { route: "/auth/products/add", name: "Add Product" },
        { route: "/auth/products/filter/1/0", name: "Filter Products" },
        { route: "/auth/about", name: "About" }
    ]

    return (
        <header
            className="bg-[#ffb300] dark:bg-[#940533] flex flex-col md:flex-row justify-between items-center px-10 py-6 shadow-lg"
        >
            <div className="flex items-center space-x-8">
                <Link href="/auth" className="hidden md:block" aria-label="Products Manager Dashboard">
                    <ProductIcon width={50} height={50} />
                </Link>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-bold text-4xl text-center">
                        Products Manager
                    </h2>
                    <p className="text-xl mt-4 mb-4 md:mb-0 text-center">
                        Hello, <span className="font-bold">{name}</span>
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
                <nav className="p-0">
                    <ul className="flex space-x-10 text-xl">
                        {
                            routes.map((route, index) => (
                                <CustomLink key={index} href={route.route} name={route.name} />
                            ))
                        }
                        <li>
                            <LogoutButton />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

function CustomLink({ href, name }: { href: string, name: string }) {
    return (
        <li className="group text-center">
            <Link
                href={href}
            >
            {name}
            </Link>
        </li>
    )
}
