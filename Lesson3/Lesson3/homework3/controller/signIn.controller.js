let users = require('../db/users')

module.exports = {
    getFormSignIn: (req, res) =>{
        res.render('signIn');
    },

   signIn:  (req, res) => {
       try {
           const signUser = users.find(user => user.password === req.body.password && user.email === req.body.email);

           if (!signUser) throw new Error('Wrong email or pass');

           res.render("signIn", {signUser})
       } catch ({message}) {
           res.redirect(`/error?error=${message}`);
       }
   }


};