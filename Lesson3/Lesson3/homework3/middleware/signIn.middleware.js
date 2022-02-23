const users = require("../db/users");
module.exports = {
    checkUserAuth: (req, res, next) => {
        try {
            const signUser = users.find(user => user.password === req.body.password && user.email === req.body.email);
            if (!signUser) throw new Error('Wrong email or pass');

            res.render("signIn", {signUser})
            next();
        } catch ({message}) {
            res.redirect(`/error?error=${message}`);
        }
    }
};