import AdminService from "../service/adminServise"
import { Request, Response } from 'express'

class AdminController {
    
    showUsersList = async (req: Request, res: Response) => {
        try {
           let listUser = await AdminService.showListOfUser()
           console.log("listUser", listUser);
           res.status(200).json(listUser)
        }
        catch (err) {
            console.log("AdminController ShowUsersList ERR: ", err);
        }
    }
}
export default new AdminController()