import { Request, Response } from 'express'
import UsersService from "../service/usersServise";

class UsersController {
    register = async (req: Request, res: Response) => {
        try {
            let user = req.body;
            let checkUserExits = await UsersService.checkUserExits(user);
            if (checkUserExits) {
                res.status(300).json("Email hoac SDT da duoc dung");
            } else {
                await UsersService.register(user);
                res.status(201).json("Tao TK thanh cong");
            }
        } catch (err) {
            console.log("UsersController Register ERR: ", err);
            res.status(300).json("ERR UsersController Register");
        }

    }

    login = async (req: Request, res: Response) => {
        try {
            let user = req.body;
            let userLogin = await UsersService.login(user);
            res.status(200).json(userLogin)
        } catch (err) {
            console.log("UsersController Login ERR: ", err);
            res.status(300).json("ERR UsersController Login");
        }
    }

    showProfileUser = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let userProfile = await UsersService.showProfileUser(id);
            res.status(201).json(userProfile);
        }
        catch (err) {
            console.log("UsersController ShowProfile ERR: ", err);
            res.status(300).json("ERR UsersController ShowProfile");
        }
    }
    editProfileUser = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let user = req.body;
            let checkUserExits = await UsersService.checkUserExits(user);
            if (checkUserExits) {
                res.status(300).json("Email hoac SDT da duoc dung");
            } else {
                await UsersService.editProfileUser(id, user);
                res.status(201).json('Sua thong tin thanh cong');
            }
        }
        catch (err) {
            console.log("UsersController ShowProfile ERR: ", err);
            res.status(300).json("ERR UsersController ShowProfile");
        }
    }
}
export default new UsersController();
