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
            let user =  req.body;
            let userLogin = await UsersService.login(user);
            res.status(200).json(userLogin)
        } catch (err) {
            console.log("UsersController Login ERR: ", err);
            res.status(300).json("ERR UsersController Login");
        }
    }
}
export default new UsersController();
