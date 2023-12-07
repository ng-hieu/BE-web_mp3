import * as jwt from 'jsonwebtoken'


export const SIGNATURE = '123456'
export const auth = (req, res, next) => {
    let authorization = req.headers.authorization
    // console.log('authorization: ', authorization);

    try {
        if (authorization) {
            let accessToken = req.headers.authorization.split(" ")[1];
            // console.log('accessToken: ', accessToken);

            if (accessToken) {
                jwt.verify(accessToken, SIGNATURE, (err, payload) => {
                    if (err) {
                        res.status(401).json({
                            error: err.message,
                            message: "Phiên đăng nhập hết hạn, vui lòng đăng nhập lại",
                            success: false
                        })
                    } else {
                        // console.log("payload:", payload)
                        req.decode = payload;
                        return next();
                    }
                })
            } else {
                res.status(401).json({
                    message: "No token provided",
                    success: false
                })
            }
        } else {
            res.status(401).json({
                message: "No token provided",
                success: false
            })
        }
    }
    catch (err) {
        console.log('ERR auth', err);

    }
}
