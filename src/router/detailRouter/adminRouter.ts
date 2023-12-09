import Router from "express";
import { auth } from "../../middleware/auth";
import AdminController from "../../controller/adminController";
import { checkRoles } from "../../middleware/checkRole";
// console.log('Da vao User router');

const adminRouter = Router();
adminRouter.use(checkRoles)
adminRouter.get('/list_users', AdminController.showUsersList)

export default adminRouter;