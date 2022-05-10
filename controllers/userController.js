const { response } = require('express');
const User = require('../models/userModel');

const userController = (User) => {
  console.log('asd');
  const getUser = async (req, res) =>{
    console.log("hola");
    const { query } = req;
    const response = await User.find(query);
    res.json(response);

  }

  // const postUser = async (req, res) => {
  //   const user = new user (req.body);
  //   await user.save();
  //   res.json(user);
  // }

  // const postLogin = async (req, res) => {
  //   const { body } = req;
  //   var response;

  //   const person = await user.findOne({
  //     "userName": body.userName
  //   })

  //   if(person == null){
  //     res.status(400).send("El usuario no existe.");
  //   }

  //   if(await bcrypt.compare(body.password, person.password)){
  //     response = { message: "Login!"}
  //   }else{
  //     res.status(400).send("Usuario o contraseña incorrectos.");
  //   }
  //   res.json(response);
  // }

  return { getUser };
}

module.exports = userController;