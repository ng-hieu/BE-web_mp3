import Router from "express";
import usersController from "../../controller/usersController";
import { auth } from "../../middleware/auth";
// console.log('Da vao User router');

const usersRouter = Router();
usersRouter.post("/register", usersController.register);
usersRouter.post("/login", usersController.login);
usersRouter.use(auth);
usersRouter.get("/edit/:id", usersController.showProfileUser);
usersRouter.put("/edit/:id", usersController.editProfileUser);

export default usersRouter;