const express = require('express');
const router = express.Router();
const registerValidation = require("../validations/registerValidation")
const {login, register, usuario,changepass, confirmRemoveUser, removeUser, registerProcess, loginProcess, logout, changeInfo } = require('../controllers/userController');
const localsUserCheck = require('../middlewares/localsUserCheck');
const loginValidation = require('../validations/loginValidation');
const checkUserLogin = require('../middlewares/checkUserLogin');
const checkUser = require('../middlewares/checkUser');
const profileValidation = require('../validations/profileValidation');


/* /user */
router
  .get('/login',checkUser, login)
  .post('/login',loginValidation, loginProcess)
  .get('/register',checkUser ,register)
  .post('/register',registerValidation  ,registerProcess)
  .get('/usuario/:id',checkUserLogin, usuario)
  .put('/edit/:id', profileValidation, changeInfo)
  .get('/changepass',checkUserLogin,changepass)
  .get('/remove/:id',checkUserLogin,confirmRemoveUser)
  .get('/logout', checkUserLogin, logout)
  .delete('/remove/:id', removeUser)

module.exports = router;