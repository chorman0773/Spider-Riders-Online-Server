const express = require("express");
const app = express();

app.use(express.static("files"));

app.post("/game.html",function(req,res){
    console.log("Game call: "+JSON.stringify(req.query));
    res.status(200);
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

