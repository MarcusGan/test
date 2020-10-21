import express from "express";

import config from './config';

const server = express();

server.set('view engine', 'ejs');
server.use(express.static(__dirname + '/public'));

server.get('/', (req, res) => {
    // res.send(`Homepage WIP\nsorry\ntry localhost:3000/words or localhost:3000/grammar`);
    res.render('home/index');
})

server.get('/grammar/te-form', (req, res)=> {
    res.render('grammar/te-form/index', {title:'て-form'});
})

server.get("/grammar/short-form", (req, res) => {
  res.render("grammar/short-form/index", {title:'short form'});
});


server.listen(config.port, config.host, () => {
    console.log(`Listening on port: ${config.port}`);
});