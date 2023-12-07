import "reflect-metadata";
import { DataSource } from "typeorm";
// console.log('da vao AppDataSource');


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "web_mp3",
    synchronize: true,
    logging: false,

    entities: [__dirname + "/entity/*.{js, ts}"],
    // entities: ["dist/src/model/*.js"]
});



