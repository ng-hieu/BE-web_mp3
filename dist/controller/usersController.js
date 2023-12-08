"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usersServise_1 = __importDefault(require("../service/usersServise"));
const jwt = __importStar(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
class UsersController {
    constructor() {
        this.takeIdUser = async (req, res) => {
            let accessToken = req.headers.authorization.split(" ")[1];
            let userIdByJwt = jwt.verify(accessToken, auth_1.SIGNATURE).userId;
            return userIdByJwt;
        };
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
                let idUserOfJwt = await this.takeIdUser(req, res);
                let idUserNeedEdit = req.params.id;
                let user = req.body;
                let checkUserExits = await usersServise_1.default.checkUserExits(user);
                if (idUserNeedEdit == idUserOfJwt) {
                    if (checkUserExits) {
                        res.status(300).json("Email hoac SDT da duoc dung");
                    }
                    else {
                        await usersServise_1.default.editProfileUser(idUserNeedEdit, user);
                        res.status(201).json('Sua thong tin thanh cong');
                    }
                }
                else {
                    res.status(400).json('Khong tim thay thong tin nguoi dung');
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