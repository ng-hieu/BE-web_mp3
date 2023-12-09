import { Users } from "../entity/Users";
declare class AdminService {
    private userRepository;
    showListOfUser: () => Promise<Users[]>;
}
declare const _default: AdminService;
export default _default;
