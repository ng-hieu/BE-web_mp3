import Router from "express";
import usersRouter from "./detailRouter/usersRouter";
// console.log('Da vao router');

const router = Router();
router.use('/',usersRouter);
export default router;
