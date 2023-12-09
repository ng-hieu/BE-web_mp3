"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminController_1 = __importDefault(require("../../controller/adminController"));
const checkRole_1 = require("../../middleware/checkRole");
const adminRouter = (0, express_1.default)();
adminRouter.use(checkRole_1.checkRoles);
adminRouter.get('/list_users', adminController_1.default.showUsersList);
exports.default = adminRouter;
//# sourceMappingURL=adminRouter.js.map