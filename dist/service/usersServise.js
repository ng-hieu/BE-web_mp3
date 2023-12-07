"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("../entity/Users");
const data_source_1 = require("../data-source");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
class UsersService {
    constructor() {
        this.userRepository = data_source_1.AppDataSource.getRepository(Users_1.Users);
        this.checkUserExits = async (userCheck) => {
            try {
                let userExits = await this.userRepository.findOne({
                    where: [
                        { userEmail: userCheck.userEmail },
                        { userPhone: userCheck.userPhone }
                    ]
                });
                return userExits;
            }
            catch (err) {
                console.log("UsersService checkUserExits ERR: ", err);
            }
        };
        this.register = async (user) => {
            try {
                let hashedPassword = bcrypt_1.default.hashSync(user.userPassword, 10);
                let newUser = new Users_1.Users();
                newUser.userEmail = user.userEmail;
                newUser.userName = user.userName;
                newUser.userPhone = user.userPhone;
                newUser.userPassword = hashedPassword;
                newUser.roleId = 2;
                await this.userRepository.save(newUser);
                return newUser;
            }
            catch (err) {
                console.log("UsersService Register ERR: ", err);
            }
        };
        this.login = async (user) => {
            try {
                let checkUser = await this.userRepository.findOne({
                    where: {
                        userEmail: user.userEmail
                    }
                });
                let userFind = checkUser;
                console.log("checkUser cua Login: ", checkUser);
                if (userFind) {
                    let pass = await bcrypt_1.default.compare(user.userPassword, userFind.userPassword);
                    if (pass) {
                        let payload;
                        if (userFind.roleId === 1) {
                            payload = {
                                userId: userFind.userId,
                                userEmail: userFind.userEmail,
                                userName: userFind.userName,
                                userPhone: userFind.userPhone,
                                roleId: 1
                            };
                        }
                        else {
                            payload = {
                                userId: userFind.userId,
                                userEmail: userFind.userEmail,
                                userName: userFind.userName,
                                userPhone: userFind.userPhone,
                                roleId: 2
                            };
                        }
                        let token = jsonwebtoken_1.default.sign(payload, auth_1.SIGNATURE, {
                            expiresIn: 3600 * 10 * 100
                        });
                        payload['token'] = token;
                        return payload;
                    }
                    else {
                        return "Sai mat khau";
                    }
                }
                else {
                    return "Khong tim thay tai khoan";
                }
            }
            catch (err) {
                console.log("UsersService Login ERR: ", err);
            }
        };
    }
}
exports.default = new UsersService();
//# sourceMappingURL=usersServise.js.map