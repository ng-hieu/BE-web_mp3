"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("../entity/Users");
const data_source_1 = require("../data-source");
class AdminService {
    constructor() {
        this.userRepository = data_source_1.AppDataSource.getRepository(Users_1.Users);
        this.showListOfUser = async () => {
            try {
                let userList = await this.userRepository.find({
                    where: { roleId: 2 }
                });
                return userList;
            }
            catch (err) {
                console.log("AdminService ShowUsersList ERR: ", err);
            }
        };
    }
}
exports.default = new AdminService();
//# sourceMappingURL=adminServise.js.map