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
    isUserDataValid: ({body}, res, next) => {
        try {

            if (!body.name.length < 2 || body.surname.length < 2) {
                throw new Error ('firstName or lastName must include more than 2 symbols')
            }
            if (!body.email.includes('(@)')){
                throw new Error ('Your email is not valid')
            }
            if (body.password.length < 6){
                throw new Error ('Your password is not valid')
            }
            if (body.age < 18){
                throw new Error ('Your age is not valid')
            }
            if (!body.city){
                throw new Error ('Enter your city')
            }
                next();
        }catch ({message}) {
            res.redirect(`/error?error=${message}`)
        }
    },
    isUserExist: ({body}, res, next) => {
        try {
            const userExist = users.some(user => user.email === req.body.email);
            if (userExist) throw new Error('User with this email exist')


            next();
        }catch ({message}) {
            res.redirect(`/error?error=${message}`)
        }
    }
};

