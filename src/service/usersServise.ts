import { Roles } from './../entity/Roles';
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
            // let newUser = new Users()
            // newUser.userEmail = user.userEmail;
            // newUser.userName = user.userName;
            // newUser.userPhone = user.userPhone;
            // newUser.userPassword = hashedPassword;
            // newUser.roleId = 2
            // await this.userRepository.save(newUser)
            // return newUser

            user.userEmail = user.userEmail;
            user.userName = user.userName;
            user.userPhone = user.userPhone;
            user.userPassword = hashedPassword;
            user.roleId = 2
            return await this.userRepository.save(user)
        } catch (err) {
            console.log("UsersService Register ERR: ", err);
        }
    }

    login = async (user) => {
        try {
            let checkUser = await this.userRepository.findOne({
                relations: {
                    roles: true
                },
                where: {
                    userEmail: user.userEmail
                }
            })
            let userFind = checkUser;
            // console.log("checkUser cua Login: ", checkUser);

            if (userFind) {
                let pass = await bcrypt.compare(user.userPassword, userFind.userPassword)
                if (pass) {
                    let payload;
                    console.log('userFind: ', userFind);
                        payload = {
                            userId: userFind.userId,
                            userEmail: userFind.userEmail,
                            userName: userFind.userName,
                            userPhone: userFind.userPhone,
                            // roleId: userFind.roles.roleId
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

    showProfileUser = async (id) => {
        try {
            return await this.userRepository.findOne(
                { where: { userId: id } }
            )
        }
        catch (err) {
            console.log("UsersService ShowProfileUser ERR: ", err);

        }
    }

    editProfileUser = async (id, user) => {
        try {
            return await this.userRepository
                .createQueryBuilder()
                .update(Users)
                .set({
                    userEmail: user.userEmail,
                    userName: user.userNam,
                    userPhone: user.userPhone
                })
                .where({ userId: id })
                .execute()
        }
        catch (err) {
            console.log("UsersService editProfile ERR: ", err);
        }
    }

}

export default new UsersService();
