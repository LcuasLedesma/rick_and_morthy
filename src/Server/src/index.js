const app = require('./app');
const PORT = process.env.PORT || 3001;
const { conn } = require('./DB_connection');

conn.sync({force: true})
   .then(() => {
      app.listen(PORT, () => {
         console.log('Server raised in port: ' + PORT);
      });
   });



















// const http = require('http');
// const data = require('./utils/data');
// // const { fetchCharById } = require('./controllers/getCharById');

// // http.createServer((req, res) => {
// //   const url = req.url.split('/');
// //   const param1 = url[1];
// //   const param2 = url[2];
// //   const id = url[3];
// //   const characterString = '/rickandmorty/character/';
// //   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

// //   if (param1 === 'rickandmorty' && param2 === 'characters') {
// //     res.writeHead(200, { 'Content-Type': 'application/json' });
// //     res.end(JSON.stringify(data));
// //   }

// //   if (param1 === 'rickandmorty' && param2 === 'character') {
// //     return fetchCharById(res, id);
// //   }
    
// // }).listen(3001, 'localhost');
