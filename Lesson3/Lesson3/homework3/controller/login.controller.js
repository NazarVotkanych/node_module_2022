const users = require('../db/users');

module.exports = {
    getCreateUserForm: (req, res) => {
            res.render('login')
        },

        createUser: (req, res) => {
            try {
                const userExist = users.some(user => user.email === req.body.email);
                if (userExist) throw new Error('User with this email exist')


                users.push({...req.body, id: users.length ? users[users.length - 1].id + 1 : 1});
                res.redirect('/users');
            } catch ({message}) {
                res.redirect(`/error?error=${message}`);
            }
        }
};