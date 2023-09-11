var express = require("express")
var app = express()
// Assign route
app.set("view-engine", "ejs");
var sentences = ["safsafasfsaf", "hello!", "odfsjaisd"];
var sentence = sentences[0];
app.get("/", (req, res) => {
  res.render("index.ejs", {s:sentence});
})

app.post("/sentence", (req, res) => {
  var random = Math.floor(Math.random()*3);
  sentence = sentences[random];
  res.redirect("/");
})
    
  // Start server
app.listen(5000, () => {
    console.log('App listening on port 5000');
});
  