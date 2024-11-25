// import json-server library to use it
const jsonServer = require('json-server');

// create server
const mediaPlayerServer = jsonServer.create();

// middleware to parse the json format
const middleware = jsonServer.defaults();

// setup path to store data
const router = jsonServer.router('db.json');

// specific order to follow - middleware then router (parsing is completed.)
mediaPlayerServer.use(middleware);
mediaPlayerServer.use(router);

// create port for the server
const PORT = 4000 || process.env.PORT ;

//  to listen to the requests from frontend
mediaPlayerServer.listen(PORT, () => {
    console.log(`Server running at localhost://${PORT} successfully`);
});