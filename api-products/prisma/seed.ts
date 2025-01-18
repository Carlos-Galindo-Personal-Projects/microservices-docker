import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.category.createMany({
        data: [
            {
                name: "Electronics",
            },
            {
                name: "Books",
            },
            {
                name: "Clothing",
            },
            {
                name: "Home",
            },
            {
                name: "Beauty",
            },
            {
                name: "Toys",
            },
            {
                name: "Food",
            },
            {
                name: "Drinks",
            },
            {
                name: "Sports",
            },
            {
                name: "Health",
            },
            {
                name: "Shoes"
            }
        ],
    });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
