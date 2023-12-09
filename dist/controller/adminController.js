"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminServise_1 = __importDefault(require("../service/adminServise"));
class AdminController {
    constructor() {
        this.showUsersList = async (req, res) => {
            try {
                let listUser = await adminServise_1.default.showListOfUser();
                res.status(200).json(listUser);
            }
            catch (err) {
                console.log("AdminController ShowUsersList ERR: ", err);
            }
        };
    }
}
exports.default = new AdminController();
//# sourceMappingURL=adminController.js.map