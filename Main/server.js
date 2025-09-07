const mysql = require("mysql");
const express = require("express");
const bodyparser = require("body-parser");
const encoder = bodyparser.urlencoded();
const jsdom = require("jsdom");
const { JSXSpreadAttribute } = require("requirejs");
const {JSDOM} = jsdom;

const app = express();
app.use("/assets", express.static("assets"))
app.set("view-engine", "ejs")

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "SECRET!",
    database: "monkeytypedb"
});

con.connect(function(error){
    if(error) throw error
    console.log("Connected!");
});


//sign up
app.get("/", (req, res)=>{
    res.render("index.ejs");
});


app.post("/", encoder, function(req, res){
    var username = req.body.username;
    var password = req.body.password;

    con.query("SELECT * FROM users WHERE usernames = ? AND passwords = ?", [username, password], function(error,results, fields){
        //make if to check if username and password already exist using code on line59
        if(results.length == 0){
            con.query("INSERT INTO users(usernames, passwords) VALUES (?,?)", [username, password], function(error, results, fields){
                if(error){
                    res.redirect("/");
                };
                res.redirect("/game");
            } );
        }
        else{
            res.redirect("/");
        }
    });
});


//sign in
app.get("/sign-in", (req, res)=>{
    res.render("sign-in.ejs");
});


app.post("/sign-in", encoder, function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    con.query("SELECT * FROM users WHERE usernames = ? AND passwords = ?", [username, password], function(error,results, fields){
        
        if(results.length > 0){
            res.redirect("/game");
        }
        else{
            res.redirect("/sign-in");
        }

        res.end();
    });
});



var sentence = "Click the button to start!";

app.post("/sentence", (req,res)=>{
    var sentenceNum = Math.floor(Math.random()*51)+1;
    con.query("SELECT * FROM sentences WHERE number = ?", [sentenceNum], function(error, results, fields){
        sentence = Object.values(results[0]);
        sentence = sentence[1];
    });
    res.redirect("/game");
})
    



app.get("/game", (req, res)=>{
    res.render("game.ejs", {sentence:sentence});
});


app.get("/endScreen", (req, res)=>{
    res.render("endScreen.ejs");
});



app.listen(3306);