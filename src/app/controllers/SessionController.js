const User = require('../models/User');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

class SessionController{
  async store(req,res){
    const {email,password} = req.body;

    //verificando se email existe
    const user = await User.findOne({
      where: {email}
    });

    if(!user){
      return res.status(401).json({error:'User não existe'});
    }

    //Verificando se a senha bate
    if(!(await user.checkPassword(password))){

      return res.status(401).json({error:'Senha ou email inválidos'});
    }

    const {id,name} = user;

    return res.json({
      user:{
        id,
        name,
        email,
      },
      token: jwt.sign({id}, authConfig.secret,{
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}
module.exports = new SessionController();
