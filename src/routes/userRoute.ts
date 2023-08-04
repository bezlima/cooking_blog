import * as express from 'express';
const userController = require('../controllers/userController' )
const userRoute = express.Router()

userRoute
    .route('/api/user')
    .get(userController.getUsersController)
    .post(userController.newUserController)

userRoute
    .route('/api/user/:id')
    .get(userController.getAnUserController)
    .delete(userController.deleteUserController)
    .post(userController.editAnUserController)

module.exports = userRoute;