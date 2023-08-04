import { Response, Request } from "express";
const { postSchema } = require('../schemas/postSchema');
const { addPost, getAPost, deleteAPost, updateAPost, getPosts } = require('../services/postServices')
const { verifyPostByID } = require('../middlewares/isAPost')

async function newPostController (req:Request, res:Response){
    try {
        const validData = postSchema.parse(req.body)
        const add = await addPost(validData)

        if (add) {
            res.status(201).send({
                "message" : "postagem cadastrado com sucesso"
            })
        } 

    } catch (err:any) {
        res.status(400).json({ error: err.message })
    }
    
}

async function getPostsController (req:Request, res:Response){
    try {
        const getPostsList = await getPosts()
        res.status(200).send({
            "post" : getPostsList
        })
    } catch (err:any) {
        res.status(400).json({ error: err.message })
    }  
}

async function getAnPostController (req:Request, res:Response){
    try {
        const validDataId = Number(req.params.id)
        const verifyAPost = await verifyPostByID(validDataId)

        if (verifyAPost) {
            const getPost = await getAPost(validDataId)
            res.status(200).send({
                "post" : getPost
            })
        } else {
            res.status(404).send({
                "message": "Postagem não encontrada"
            })
        }


    } catch (err:any) {
        res.status(400).json({ error: err.message })
    }
    
}

async function editAnPostController (req:Request, res:Response){
    try {
        const validDataId = Number(req.params.id)
        const validData = postSchema.parse(req.body)
        const verifyAPost = await verifyPostByID(validDataId)
        
        if(verifyAPost) {
            const edit = await updateAPost(validData, validDataId)
            if(edit) {
                res.status(201).send({
                    "message" : "postagem editada com sucesso"
                })
            } else {
                res.status(405).send({
                    "message": "Erro interno"
                })
            }
        } else {
            res.status(404).send({
                "menssage" : "postagem não encontrada"
            })
        }
    } catch (err:any) {
        res.status(400).json({ error: err.message })
    }
    
}

async function deletePostController (req:Request, res:Response){
    try {
        const validDataId = Number(req.params.id)
        const verifyAPost = verifyPostByID(validDataId)
        
        if(verifyAPost) {
            const deletePost = await deleteAPost(validDataId)
            if(deletePost) {
                res.status(200).send({
                    "message" : "Postagem deletada com sucesso"
                })
            } else {
                res.status(405).send({
                    "message": "Erro ao deletar"
                })
            }
        } 
    } catch (err:any) {
        res.status(400).json({ error: err.message })
    }
    
}

module.exports = { newPostController, getAnPostController, deletePostController, editAnPostController, getPostsController }