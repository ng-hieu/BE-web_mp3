import { Users } from "../entity/Users";
import { AppDataSource } from "../data-source";

class AdminService {
    private userRepository = AppDataSource.getRepository(Users);
    
}

export default AdminService