"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "web_mp3",
    synchronize: true,
    logging: false,
    entities: [__dirname + "/entity/*.{js, ts}"],
});
//# sourceMappingURL=data-source.js.map