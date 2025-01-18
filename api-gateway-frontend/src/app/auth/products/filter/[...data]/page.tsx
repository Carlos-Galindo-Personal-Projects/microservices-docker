import Product from "./_components/Product";

export default async function FilterPage({ params }: { params: Promise<{ data: string[] }> }) {

    const { data } = await params;
    const page = Number(data[0]);
    const categoryId = Number(data[1]);

    return (
        <Product page={page} categoryId={categoryId} />
    );
}
