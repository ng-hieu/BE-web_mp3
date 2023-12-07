"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usersServise_1 = __importDefault(require("../service/usersServise"));
class UsersController {
    constructor() {
        this.register = async (req, res) => {
            try {
                let user = req.body;
                let checkUserExits = await usersServise_1.default.checkUserExits(user);
                if (checkUserExits) {
                    res.status(300).json("Email hoac SDT da duoc dung");
                }
                else {
                    await usersServise_1.default.register(user);
                    res.status(201).json("Tao TK thanh cong");
                }
            }
            catch (err) {
                console.log("UsersController Register ERR: ", err);
                res.status(300).json("ERR UsersController Register");
            }
        };
        this.login = async (req, res) => {
            try {
                let user = req.body;
                let userLogin = await usersServise_1.default.login(user);
                res.status(200).json(userLogin);
            }
            catch (err) {
                console.log("UsersController Login ERR: ", err);
                res.status(300).json("ERR UsersController Login");
            }
        };
        this.showProfileUser = async (req, res) => {
            try {
                let id = req.params.id;
                let userProfile = await usersServise_1.default.showProfileUser(id);
                res.status(201).json(userProfile);
            }
            catch (err) {
                console.log("UsersController ShowProfile ERR: ", err);
                res.status(300).json("ERR UsersController ShowProfile");
            }
        };
        this.editProfileUser = async (req, res) => {
            try {
                let id = req.params.id;
                let user = req.body;
                let checkUserExits = await usersServise_1.default.checkUserExits(user);
                if (checkUserExits) {
                    res.status(300).json("Email hoac SDT da duoc dung");
                }
                else {
                    await usersServise_1.default.editProfileUser(id, user);
                    res.status(201).json('Sua thong tin thanh cong');
                }
            }
            catch (err) {
                console.log("UsersController ShowProfile ERR: ", err);
                res.status(300).json("ERR UsersController ShowProfile");
            }
        };
    }
}
exports.default = new UsersController();
//# sourceMappingURL=usersController.js.map