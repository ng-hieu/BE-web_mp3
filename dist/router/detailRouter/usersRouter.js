"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersController_1 = __importDefault(require("../../controller/usersController"));
const auth_1 = require("../../middleware/auth");
const usersRouter = (0, express_1.default)();
usersRouter.post("/register", usersController_1.default.register);
usersRouter.post("/login", usersController_1.default.login);
usersRouter.use(auth_1.auth);
usersRouter.get("/edit/:id", usersController_1.default.showProfileUser);
usersRouter.put("/edit/:id", usersController_1.default.editProfileUser);
exports.default = usersRouter;
//# sourceMappingURL=usersRouter.js.map