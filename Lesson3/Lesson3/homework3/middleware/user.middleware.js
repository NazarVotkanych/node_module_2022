const users = require("../db/users");

module.exports = {
    isUserValid: (req, res, next) => {
        try {
            const {userId} = req.params;
            if (!Number.isInteger(+userId) || Number.isNaN(+userId))
                throw new Error ('Not valid ID!');


            const user = users.find(user => user.id === +userId);
            if (!user) throw new Error (`User with ID: ${userId} exist`);

            req.user = user;
            next();
        }catch ({message}) {
            res.redirect(`/error?error=${message}`)
        }
    },
    isUserDataValid: (req, res, next) => {
        try {

            next();
        }catch ({message}) {
            res.redirect(`/error?error=${message}`)
        }
    }
};

