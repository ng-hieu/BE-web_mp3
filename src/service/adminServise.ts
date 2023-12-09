import { Users } from "../entity/Users";
import { AppDataSource } from "../data-source";

class AdminService {
    private userRepository = AppDataSource.getRepository(Users);

    showListOfUser = async () => {
        try {
            let userList = await this.userRepository.find({
                select: {
                    userId: true,
                    userEmail: true,
                    userName: true,
                    userPhone: true,
                    roles: {
                        roleId: false,
                        roleName: false
                    }
                },
                relations: {
                    roles: true
                }, where: {
                    roles: {
                        roleId: 2
                    }
                }
            })
            return userList
        }
        catch (err) {
            console.log("AdminService ShowUsersList ERR: ", err);
        }
    }
}

export default new AdminService()