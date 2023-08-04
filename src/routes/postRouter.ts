import * as express from 'express';
const postController = require('../controllers/postController' )
const postRoute = express.Router()

postRoute
    .route('/api/post')
    .post(postController.newPostController)
    .get(postController.getPostsController)

postRoute
    .route('/api/post/:id')
    .get(postController.getAnPostController)
    .delete(postController.deletePostController)
    .post(postController.editAnPostController)

module.exports = postRoute;