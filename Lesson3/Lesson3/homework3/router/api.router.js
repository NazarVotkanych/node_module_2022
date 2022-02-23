const Router = require('express');

const userRouter = require('./user.router');
const loginRouter = require('./login.router');
const signInRouter = require('./singIn.router');



const routes = Router();


routes.use('/users', userRouter);
routes.use('/login', loginRouter);
routes.use('/signIn', signInRouter);


routes.get('/error', ({query}, res) => {
    res.render('error', {error: query.error});
})
routes.use((req, res) => {
    res.render('notFound');
})

module.exports = routes;
