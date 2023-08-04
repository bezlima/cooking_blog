const { getUserByEmail } = require('../services/middlewareServices')

interface IUsers {
    id?: number;
    name: string;
    email: string;
    nickName: string;
    password: string;
    role: number;
}

function verifyAdm(user: IUsers) {
    const ReqRole = user.role
    const BDRole = getUserByEmail(user.email)
    
    if(BDRole.role === undefined) return false;
    else if (ReqRole != BDRole.role) return false;
    else if (ReqRole != 0) return false;
    else if (BDRole.role != 0) return false;
    else return true;
}

module.exports = { verifyAdm }