const { default: axios } = require("axios");


function fetchCharById(res, id) {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
      res.writeHead(200, { "Content-Type": "application/json" }).end(JSON.stringify(data));
    })
    .catch((error) => {
      res.status(500).contentType("text/plain").send(error.message);
    });
}

module.exports = {
  fetchCharById,
};
