const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(express.static("public"))

var items = [];
var work = [];


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));


//Home route
app.get("/", function(req, res) {
    var today = new Date();
    var currentDay = today.getDay();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let options =  {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    day = today.toLocaleTimeString("en-US", options);
    res.render("list", {listTitle: day, items: items});
});

app.post("/", function(req, res) {
    var item = req.body.newItem;
    
    if(req.body.list === "work") {
        work.push(item);
        res.redirect("/work");
    }
    else {
        items.push(item);
        res.redirect("/");
    }
});

//Work route

app.get("/work", function(req, res) {
    res.render("list", {listTitle: "work", items: work});
});

//About page

app.get("/about", function(req, res) {
    res.render("about")
});

app.listen(3000, function() {
    console.log("Server listening on port 3000.....")
});

