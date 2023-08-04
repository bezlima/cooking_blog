import { Response, Request } from "express";
const { userSchema, editUserSchema, admSchema } = require('../schemas/userSchema');
const { addUser, getAnUser, deleteAnUser, updateAnUser, getUsers } = require('../services/userServices')
const { verifyAdm } = require('../middlewares/isAdm')

async function newUserController (req:Request, res:Response){
    try {
        const validData = userSchema.parse(req.body)
        const add = await addUser(validData)

        if (add) {
            res.status(201).send({
                "message" : "usuário cadastrado com sucesso"
            })
        } else {
            res.status(405).send({
                "message" : "usuário já cadastrado"
            })
        }
    } catch (err:any) {
        res.status(400).json({ error: err.message })
    }
}

async function getUsersController (req:Request, res:Response){
    try {
        const validData = admSchema.parse(req.body)
        const isAdm = verifyAdm(validData)
        switch (isAdm) {
            case false:
                res.status(401).send({
                    "message" : 'usuário não autorizado'
                })
                break;
            default:
                const getUsersList = await getUsers()
                res.status(200).send({
                    "user" : getUsersList
                })
                break;
        }
    } catch (err:any) {
        res.status(400).json({ error: err.message })
    }  
}

async function getAnUserController (req:Request, res:Response){
    try {
        const validData = parseInt(req.params.id)
        const getUser = await getAnUser(validData)

        res.status(200).send({
            "user" : getUser
        })
    } catch (err:any) {
        res.status(400).json({ error: err.message })
    }
}

async function editAnUserController (req:Request, res:Response){
    try {
        const validData = editUserSchema.parse(req.body)
        const validDataId = parseInt(req.params.id)
        const getUser = await updateAnUser( validData, validDataId )

        if (getUser) {
            res.status(201).send({
                "user" : "usuário editado com sucesso"
            })
        } else {
            res.status(405).send({
                "user" : "erro na edição"
            })
        }
    } catch (err:any) {
        res.status(400).json({ error: err.message })
    }
}

async function deleteUserController (req:Request, res:Response){
    try {
        const validDataId = parseInt(req.params.id)
        const validData = admSchema.parse(req.body)
        const isAdm = verifyAdm(validData)

        switch (isAdm) {
            case false:
                res.status(401).send({
                    "message" : 'usuário não autorizado'
                })
                break;
            default:
                const getUser = await deleteAnUser(validDataId)
                if (getUser) {
                    res.status(200).send({
                        "user" : "usuário deletado com sucesso"
                    })
                } else {
                    res.status(405).send({
                        "user" : "erro na exclusão"
                    })
                }
                break;
        }
    } catch (err:any) {
        res.status(400).json({ error: err.message })
    }
}

module.exports = { getUsersController, newUserController, getAnUserController, deleteUserController, editAnUserController }