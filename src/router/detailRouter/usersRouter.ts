import Router from "express";
import usersController from "../../controller/usersController";
// console.log('Da vao User router');

const usersRouter = Router();
usersRouter.post("/register", usersController.register);
usersRouter.post("/login", usersController.login);

export default usersRouter;