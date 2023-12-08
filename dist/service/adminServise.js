"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("../entity/Users");
const data_source_1 = require("../data-source");
class AdminService {
    constructor() {
        this.userRepository = data_source_1.AppDataSource.getRepository(Users_1.Users);
    }
}
exports.default = AdminService;
//# sourceMappingURL=adminServise.js.map