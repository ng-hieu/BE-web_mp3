import { Users } from "../entity/Users";
declare class UsersService {
    private userRepository;
    checkUserExits: (userCheck: any) => Promise<Users>;
    register: (user: any) => Promise<Users>;
    login: (user: any) => Promise<any>;
}
declare const _default: UsersService;
export default _default;
