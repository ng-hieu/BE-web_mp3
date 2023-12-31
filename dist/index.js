"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router/router"));
const data_source_1 = require("./data-source");
const app = (0, express_1.default)();
const PORT = 8000;
data_source_1.AppDataSource.initialize().then(() => {
    console.log('Connect Database Success');
});
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use('', router_1.default);
app.listen(PORT, () => {
    console.log(`Server ${PORT} is running`);
});
//# sourceMappingURL=index.js.map