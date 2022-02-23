let users = require('../db/users')

module.exports = {
    getFormSignIn: (req, res) =>{
        res.render('signIn');
    },

   signIn:  (req, res) => {
           res.render("signIn", {signUser})
   }


};