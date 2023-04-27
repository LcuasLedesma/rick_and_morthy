

require("dotenv").config();

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const STATUS_OK = 200
const STATUS_ERROR = 500 

function login (req, res) {
  const {password, email} = req.query;

  try {
    
    if (!password || !email) {
      return res.status(STATUS_ERROR).json({message: 'No se ha enviado la información necesaria'});
    }
    if (password === PASSWORD && email === EMAIL) {
      return res.status(STATUS_OK).json({access: true});
    }else{
      res.status(STATUS_OK).json({access: false});
    }
  } catch (error) {
    res.status(STATUS_ERROR).json(error);
  }
 
}

module.exports = {
  login,
}