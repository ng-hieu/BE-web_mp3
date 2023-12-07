import { Request, Response } from 'express';
declare class UsersController {
    register: (req: Request, res: Response) => Promise<void>;
    login: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UsersController;
export default _default;
