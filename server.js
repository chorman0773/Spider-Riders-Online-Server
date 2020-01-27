const express = require("express");
const app = express();

app.use(express.static("files"));

// Note: These responses are not exhaustively tested, and are simply known to have the effect of advancing the game.
const commands = {
    login: (req,res)=>res.status(200).send("login="+req.query.username),
    checkReward: (req,res)=>res.status(200).send("reward=1"),
    updateDeck: (req,res)=>res.status(200).send("none"),
    newplayer: (req,res) => res.status(200).send("mission=1"),
    updateuser: (req,res) => res.status(200).send(req.query.statName+"="+req.query.toAdd),
    subscribeuser: (req,res) => res.status(200).send("login="+req.query.username)
};

app.post("/game.html",function(req,res){
    console.log("Game call: "+JSON.stringify(req.query));
    let type = req.query.callType;
    if(commands[type]!==undefined)
        commands[type](req,res);
    else
        res.status(500).send(JSON.stringify(req.query));
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

const RtmpServer = require('rtmp-server');
const rtmpServer = new RtmpServer();
rtmpServer.on('err',err=>{throw err;});
rtmpServer.on('client',client=>{
    client.on('command', command => {
      console.log(command.cmd, command);
    });

    client.on('connect', () => {
        console.log('connect', client.app);
    });

    client.on('play', ({ streamName }) => {
        console.log('PLAY', streamName);
    });

    client.on('publish', ({ streamName }) => {
        console.log('PUBLISH', streamName);
    });

    client.on('stop', () => {
        console.log('client disconnected');
    });
});

rtmpServer.listen(1935);

