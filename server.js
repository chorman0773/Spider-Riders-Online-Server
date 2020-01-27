const express = require("express");
const app = express();

app.use(express.static("files"));

const commands = {
    login: (req,res)=>res.status(200).send("login=a"),
    checkReward: (req,res)=>res.status(200).send("reward=0"),
    updateDeck: (req,res)=>res.status(200).send("none"),
    newplayer: (req,res) => res.status(200).send("mission=1"),
    updateuser: (req,res) => res.status(200).send(req.query.statName=req.query.toAdd)
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

