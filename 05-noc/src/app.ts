import { envs } from "./config/plugins/envs.plugin";
import { LogModel, MongoDatabase } from "./data/mongo";
import { PrismaClient } from "./generated/prisma";
import { Server } from "./presentation/server";

(() => {
    main();
})();

async function main() {
    await MongoDatabase.connect({
        montoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
    });

    // const prisma = new PrismaClient();

    // Crear un registro en Prisma
    /*const newLog = await prisma.logModal.create({
        data: {
            message: "Test message desde Prisma",
            origin: "app.ts",
            level: 'HIGH',
        },
    });
    const logs = await prisma.logModal.findMany({
        where: {
            level: "HIGH",
        },
    });
    console.log(logs);*/


    Server.start();
}
