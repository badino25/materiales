// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const {body} = require('express-validator');
const path = require("path");
const usersController = require('../controllers/usersControllers');


/* validaciones*/
const validationForm = [
body('nombre').notEmpty().withMessage('Ingrese el nombre del usuario.').bail()
.isLength({min:3, max:20 }).withMessage('El nombre debe tener minimo 3 caracteres y 20 de maximo.').bail(),
body('apellido').notEmpty().withMessage('Ingrese el apellido del usuario.').bail()
.isLength({min:3, max:20 }).withMessage('El apellido debe tener minimo 3 caracteres y 20 de maximo.').bail(),
body('email').isEmail().withMessage('Debe ingresar un Email valido').bail(),
body('contraseña').notEmpty().withMessage('Ingrese su contraseña').bail()

];




router.get('/register' , usersController.register);
router.post('/register', validationForm,usersController.crearUsuario);

router.get('/login', usersController.login);



module.exports = router