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
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.SIGNATURE = void 0;
const jwt = __importStar(require("jsonwebtoken"));
exports.SIGNATURE = '123456';
const auth = (req, res, next) => {
    let authorization = req.headers.authorization;
    if (authorization) {
        let accessToken = req.headers.authorization.split(" ")[1];
        if (accessToken) {
            jwt.verify(accessToken, exports.SIGNATURE, (err, payload) => {
                if (err) {
                    res.status(401).json({
                        error: err.message,
                        message: "Phiên đăng nhập hết hạn, vui lòng đăng nhập lại",
                        success: false
                    });
                }
                else {
                    req.decode = payload;
                    return next();
                }
            });
        }
        else {
            res.status(401).json({
                message: "No token provided",
                success: false
            });
        }
    }
    else {
        res.status(401).json({
            message: "No token provided",
            success: false
        });
    }
};
exports.auth = auth;
//# sourceMappingURL=auth.js.map