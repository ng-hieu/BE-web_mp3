import { SIGNATURE } from "./auth";
import * as jwt from 'jsonwebtoken'

 export const checkRoles = (req, res, next) => {
    try {
        let authorization = req.headers.authorization
        let accessToken = req.headers.authorization.split(" ")[1];
        let roleId = jwt.verify(accessToken, SIGNATURE).roleId;
        if (roleId==1){
            next();
        } else {
            res.status(401).json({
                message: "Ban khong phai Admin"
            })
        }
    }
    catch (err) {
        console.log('ERR CheckRoles', err);
    }
 }