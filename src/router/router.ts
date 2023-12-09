import Router from "express";
import usersRouter from "./detailRouter/usersRouter";
import adminRouter from "./detailRouter/adminRouter";
// console.log('Da vao router');

const router = Router();
router.use('/',usersRouter);
router.use('/admin', adminRouter);
export default router;
