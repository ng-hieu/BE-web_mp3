import { Users } from "../entity/Users";
declare class UsersService {
    private userRepository;
    checkUserExits: (userCheck: any) => Promise<Users>;
    register: (user: any) => Promise<any>;
    login: (user: any) => Promise<any>;
    showProfileUser: (id: any) => Promise<Users>;
    editProfileUser: (id: any, user: any) => Promise<import("typeorm").UpdateResult>;
}
declare const _default: UsersService;
export default _default;
