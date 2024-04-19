import { prismaClient } from "./src/application/database.js";

const createManyTestContacts = async () => {
    for (let i = 0; i < 15; i++) {
        await prismaClient.contact.create({
            data: {
                username: `test`,
                first_name: `test ${i}`,
                last_name: `test ${i}`,
                email: `test${i}@pzn.com`,
                phone: `080900000${i}`
            }
        });
    }
};

// Memanggil fungsi asinkron dengan await untuk menunggu hasilnya
const main = async () => {
    try {
        await createManyTestContacts();
        console.log("Contacts created successfully.");
    } catch (error) {
        console.error("Error creating contacts:", error);
    }
};

// Memanggil main function untuk menjalankan program
main();