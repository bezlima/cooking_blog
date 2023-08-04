import { myUsers } from '../database/base'

interface IUsers {
    id?: number;
    name: string;
    email: string;
    nickName: string;
    password: string;
    role: number;
}

interface IEditUsers {
    id?: number;
    name: string;
    nickName: string;
    password: string;
    role: number;
}

function hasUser(id: number) {
    const hasUser = myUsers.some((user:IUsers) => user.id === id)
    return hasUser
}

function addUser(user : IUsers) {
    const hasUser = myUsers.some((users:IUsers) => users.email === user.email)
    const editUser = {
        id: myUsers.length,
        ...user
    }
    if (!hasUser) {
        myUsers.push(editUser)
        return true
    } else {
        return false
    }
}

function getUsers() {
    const usersReturn = myUsers.map(({ password, ...rest }) => rest);
    return usersReturn
}

function getAnUser(id : number) {
    if (hasUser(id)) {
        const findUSer = myUsers.find((user : IUsers) => user.id === id )
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

function deleteAnUser(id : number) {
    if (hasUser(id)) {        
        const findUserIndex = myUsers.findIndex((users : IUsers) => users.id === id)
        myUsers.splice(findUserIndex, 1)
        return true
    } else {
        return false
    }
}

function updateAnUser(user : IEditUsers, id : number) {
    const findUSer = myUsers.find((user : IUsers) => user.id === id )
    if (findUSer) {
        let editUser = {
            id: id,
            email: findUSer.email,
            ...user
        }
        if (hasUser(id)) {        
            const findUserIndex = myUsers.findIndex((users : IUsers) => users.id === id)
            myUsers.splice(findUserIndex, 1, editUser)
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

module.exports = { addUser, getAnUser, deleteAnUser, updateAnUser, getUsers }