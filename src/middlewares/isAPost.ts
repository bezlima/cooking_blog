import { myPosts } from '../database/base'

interface IPost {
    id: number;
    userNickName: string;
    userId: string;
    title: string;
    postContent: string;
    dateTime?: string;
    ingredients: string;
}

function verifyPostByID(id: number) {
    const validate = myPosts.some((item : IPost) => item.id === id)

    // console.log(validate)

    if(validate) return true
    else return
}

module.exports = { verifyPostByID }