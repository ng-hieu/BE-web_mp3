import Router from "express";
import usersController from "../../controller/usersController";
import { auth } from "../../middleware/auth";
// console.log('Da vao User router');

const adminRouter = Router();


export default adminRouter;