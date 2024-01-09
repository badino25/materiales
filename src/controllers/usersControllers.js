const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');
const { stringify } = require('querystring');
const json2 = () => {
	const jsonSearch = path.join(__dirname, '../data/registerUser.json');
	const jsonRead = JSON.parse(fs.readFileSync(jsonSearch, 'utf-8'));
	return jsonRead
}
const jsonSearch = path.join(__dirname, "../data/registerUser.json");


const users = { 

login:(req,res) => {
res.render('login')
},    


register:(req,res) => {
    res.render('register')

},

crearUsuario: (req,res,next) =>{
    const error = validationResult(req);
    if (!error.isEmpty()){
        res.render("register", {error:error.mapped(),old:req.body})
    
    }
const users = json2();
const {nombre,apellido,email,contraseña} = req.body;
const idnuevo = Date.now();
let newUser = {
    id:+idnuevo,
    nombre:nombre.trim(),
    apellido:apellido.trim(),
    email:email.trim(),
    contraseña

} 
users.push(newUser);
const json = JSON.stringify(users);
fs.writeFileSync(jsonSearch, json, 'utf-8');
res.redirect('/');
},

}


module.exports = users;