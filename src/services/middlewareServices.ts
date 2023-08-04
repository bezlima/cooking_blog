import { myUsers } from '../database/base'

function hasUser(email : string) {
    const hasUser = myUsers.some((user:IUsers) => user.email === email)
    return hasUser
}

function getUserByEmail(email : string) {
    if (hasUser(email)) {
        const findUSer = myUsers.find((user : IUsers) => user.email === email)
        const userReturn = {
            "name": findUSer?.name,
            "email": findUSer?.email,
            "nickName": findUSer?.nickName,
            "role": findUSer?.role
        }
        return userReturn
    } else {
        return {}
    }
}

module.exports = { getUserByEmail }