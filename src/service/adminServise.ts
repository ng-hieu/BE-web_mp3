import { Users } from "../entity/Users";
import { AppDataSource } from "../data-source";

class AdminService {
    private userRepository = AppDataSource.getRepository(Users);

    showListOfUser = async() =>{
        try{
            let userList = await this.userRepository.find({
                relations: {
                    roles: true
                }
            })
            return userList
        }
        catch(err){
            console.log("AdminService ShowUsersList ERR: ", err);    
        }
    }
}

export default new AdminService()