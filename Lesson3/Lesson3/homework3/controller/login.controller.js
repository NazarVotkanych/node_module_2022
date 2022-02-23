const users = require('../db/users');

module.exports = {
    getCreateUserForm: (req, res) => {
            res.render('login')
        },

        createUser: (req, res) => {
                users.push({...req.body, id: users.length ? users[users.length - 1].id + 1 : 1});
                res.redirect('/users');

        }
};