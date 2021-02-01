const {Router} = require('express');
const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');

const authMiddleware = require('./app/middlewares/auth');

const routes = new Router();

routes.post('/user', UserController.store);
routes.post('/sessions', SessionController.store);

//Rotas abaixo necessitam do token
routes.use(authMiddleware);
routes.put('/user', UserController.update);




module.exports = routes;
