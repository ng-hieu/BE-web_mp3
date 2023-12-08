import { Request, Response } from 'express';
declare class UsersController {
    takeIdUser: (req: Request, res: Response) => Promise<any>;
    register: (req: Request, res: Response) => Promise<void>;
    login: (req: Request, res: Response) => Promise<void>;
    showProfileUser: (req: Request, res: Response) => Promise<void>;
    editProfileUser: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UsersController;
export default _default;
