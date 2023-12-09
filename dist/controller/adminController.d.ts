import { Request, Response } from 'express';
declare class AdminController {
    showUsersList: (req: Request, res: Response) => Promise<void>;
}
declare const _default: AdminController;
export default _default;
