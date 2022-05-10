const express = require('express');
const userController = require('../controllers/userController');

const routes = (User) => {
  const userRouter = express.Router();

  const { getUser } = userController(User);

  userRouter.route('/user')
    
    .get(getUser);

    return userRouter;

};

module.exports = routes;