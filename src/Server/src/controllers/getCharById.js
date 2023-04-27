const { default: axios } = require("axios");

require("dotenv").config();

const URL = process.env.API_URL;
const STATUS_OK = 200
const STATUS_ERROR = 500 

async function getCharById(req, res) {
  const {id} = req.params;

    const response = await axios.get(`${URL}${id}`);
    const data = response.data;
    
    try {
      if (data) {
        const character = {
            id: data.id,
            name: data.name,
            status: data.status,
            species: data.species,
            origin: data.origin?.name,
            image: data.image,
            gender: data.gender
           }
          return res.status(STATUS_OK).json(character);
      }else{
        res.status(STATUS_ERROR).json({message: 'Character not found'});
      }
    } catch (error) {
      return res.status(STATUS_ERROR).json({message: error});
    }
  

}

module.exports = {
  getCharById,
};
