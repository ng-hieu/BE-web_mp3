import { Users } from "../entity/Users";
import { AppDataSource } from "../data-source";

class AdminService {
    private userRepository = AppDataSource.getRepository(Users);

    showListOfUser = async() =>{
        try{
            let userList = await this.userRepository.find(
                {
                    where: {roleId: 2}
                }
            )
            return userList
        }
        catch(err){
            console.log("AdminService ShowUsersList ERR: ", err);    
        }
    }
}

export default new AdminService()