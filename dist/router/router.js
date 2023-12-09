"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersRouter_1 = __importDefault(require("./detailRouter/usersRouter"));
const adminRouter_1 = __importDefault(require("./detailRouter/adminRouter"));
const router = (0, express_1.default)();
router.use('/', usersRouter_1.default);
router.use('/admin', adminRouter_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map