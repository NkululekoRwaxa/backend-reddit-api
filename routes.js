import express from 'express'
// all controller imports
import basicController from './controllers/basicController.js';
import userController from './controllers/userController.js';
import postController from './controllers/postController.js';
import commentController from './controllers/commentController.js';

const routes = express();
routes.get('/', basicController.get)

// user routes
routes.post('/signup', userController.post)

// post routes
routes.post('/post', postController.post)
routes.get('/posts', postController.getAll)
routes.get('/post/:id', postController.getById)

// comment routes
routes.post('/comment', commentController.post)

export default routes