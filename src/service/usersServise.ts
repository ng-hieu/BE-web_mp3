import { Users } from "../entity/Users";
import { AppDataSource } from "../data-source";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { SIGNATURE } from "../middleware/auth";

class UsersService {
    private userRepository = AppDataSource.getRepository(Users);

    checkUserExits = async (userCheck) => {
        try {
            let userExits = await this.userRepository.findOne({
                where: [
                    { userEmail: userCheck.userEmail },
                    { userPhone: userCheck.userPhone }
                ]
            });
            return userExits
        } catch (err) {
            console.log("UsersService checkUserExits ERR: ", err);
        }
    }

    register = async (user) => {
        try {
            let hashedPassword = bcrypt.hashSync(user.userPassword, 10);
            let newUser = new Users()
            newUser.userEmail = user.userEmail;
            newUser.userName = user.userName;
            newUser.userPhone = user.userPhone;
            newUser.userPassword = hashedPassword;
            newUser.roleId = 2;

            await this.userRepository.save(newUser)
            return newUser
        } catch (err) {
            console.log("UsersService Register ERR: ", err);
        }
    }

    login = async (user) => {
        try {
            let checkUser = await this.userRepository.findOne({
                where: {
                    userEmail: user.userEmail
                }
            }
            )
            let userFind = checkUser;
            console.log("checkUser cua Login: ", checkUser);

            if (userFind) {
                let pass = await bcrypt.compare(user.userPassword, userFind.userPassword)
                if (pass) {
                    let payload;
                    if (userFind.roleId === 1) {
                        payload = {
                            userId: userFind.userId,
                            userEmail: userFind.userEmail,
                            userName: userFind.userName,
                            userPhone: userFind.userPhone,
                            roleId: 1
                        }
                    } else {
                        payload = {
                            userId: userFind.userId,
                            userEmail: userFind.userEmail,
                            userName: userFind.userName,
                            userPhone: userFind.userPhone,
                            roleId: 2
                        }
                    }
                    let token = jwt.sign(payload, SIGNATURE, {
                        expiresIn: 3600 * 10 * 100
                    })
                    payload['token'] = token;
                    // console.log('token cua Login: ', token);
                    return payload
                } else {
                    return "Sai mat khau"
                }
            } else {
                return "Khong tim thay tai khoan"
            }
        }
        catch (err) {
            console.log("UsersService Login ERR: ", err);
        }
    }
}

export default new UsersService();
