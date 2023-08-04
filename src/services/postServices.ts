import { myPosts } from '../database/base'

interface IPost {
    id?: number;
    userNickName: string;
    userId: string;
    title: string;
    postContent: string;
    dateTime?: string;
    ingredients: string;
}

function getDate() {
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getUTCMinutes();
    return `${day}/${month}/${year} - ${hours}:${minutes}`
}

function addPost(post : IPost) {
    const date = getDate()
    const editUser = {
        id: myPosts.length,
        dateTime: date,
        ...post
    }
    myPosts.push(editUser)
    return true
}

function getPosts() {
    const postReturn = myPosts.map(({ userId, ...rest }) => rest);
    return postReturn
}

function getAPost(id : number) {
    const findPost = myPosts.filter((item) => item.id === id)
    return findPost ? findPost : {}
}

function deleteAPost(id : number) {      
    const findPostIndex = myPosts.findIndex((post : IPost) => post.id === id)
    myPosts.splice(findPostIndex, 1)
    return true
}

function updateAPost(post : IPost, id : number) {
    const findPost = myPosts.find((post : IPost) => post.id === id )
    const date = getDate()
    if (findPost) {
        let editPost = {
            id: id,
            dateTime: date,
            userNickName: findPost.userNickName,
            userId: findPost.userId,
            title: post.title,
            postContent: post.postContent,
            ingredients: post.ingredients,
        }      
        const findPostIndex = myPosts.findIndex((post : IPost) => post.id === id )
        myPosts.splice(findPostIndex, 1, editPost)
        return true
    } else {
        return false
    }
}

module.exports = { addPost, getAPost, deleteAPost, updateAPost, getPosts }