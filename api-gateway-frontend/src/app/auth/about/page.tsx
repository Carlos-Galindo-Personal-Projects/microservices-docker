import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <section className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-4">About</h2>
                <p className="text-lg leading-relaxed">
                    This is a simple example of how to use the API Gateway with a frontend application.
                </p>
            </section>

            <section className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Overview</h3>
                <p className="mb-4">
                    The frontend application is a Next.js application
                    that uses the API Gateway to communicate with the backend services.
                </p>
                <p className="mb-4">
                    The backend services consist of a set of microservices used to manage products effectively.
                </p>
                <p>
                    The frontend provides a simple dashboard to enable users to add products, filter them, and view information about the application.
                </p>
            </section>

            <section className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Architecture</h3>
                <div className="flex justify-center">
                    <Image
                        src="/architecture.svg"
                        alt="Architecture"
                        width={800}
                        height={400}
                        className="rounded-lg shadow-md"
                    />
                </div>
            </section>
            <section>
                <h3 className="text-2xl font-semibold mb-8">Used Technologies</h3>
                <div className="flex justify-center">
                <a href="https://skillicons.dev">
                        <Image
                            src="https://skillicons.dev/icons?i=ts,nodejs,npm,express,tailwind,next,postgres,prisma&perline=12" alt="icons"
                            width={800}
                            height={400}
                        />
                    </a>
                </div>
            </section>
        </div>
    );
}
