const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
app.use(express.static("public"))




app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/todolistDB")
const itemSchema = {
    name: String
}

const Item = mongoose.model("Item", itemSchema)

// const item1 = new Item({
//     name: "hello"
// })

// const item2 = new Item({
//     name: "namaste"
// })

// const item3 = new Item({
//     name: "bye"
// })

// const defaultItems = [item1, item2, item3]
// Item.insertMany(defaultItems)


//Home route
app.get("/", function(req, res) {
    Item.find()
    .then(result=> {
        res.render("list", {listTitle: "Today", items: result});
    })
    .catch(err => {
        cosole.error('Error finding documents', err);
        res.status(500).send('Error fetching items');
            
     })

});
const workSchema = {
    name: String
}
const WorkItem = mongoose.model("WorkItem", workSchema)


app.post("/", function(req, res) {
    if(req.body)
    var item = req.body.newItem;

    if(req.body.list === "work") {
        let i = new WorkItem({
            name: item
        })
        i.save()
        res.redirect("/work");
    }
    else {
        let i = new Item({
            name: item
        })
        i.save()
        res.redirect("/");
    }
});

//Work route


app.get("/work", function(req, res) {
    WorkItem.find()
    .then(result=> {
        res.render("list", {listTitle: "work", items: result});
    })
    .catch(err => {
        cosole.error('Error finding documents', err);
        res.status(500).send('Error fetching items');
            
     })
});


app.post("/delete", function(req, res) {
    var id = req.body.itemId;
    var title = req.body.listName;

    if(title == "work") {
        WorkItem.deleteOne({_id: id})
        .then(() => {
            res.redirect("/work");
        })
        .catch(err => {
            console.error('Error deleting item', err);
            res.status(500).send('Error deleting item');
        });
    }
    else {
        // console.log(id)
        Item.deleteOne({_id: id})
        .then(() => {
            res.redirect("/");
        })
        .catch(err => {
            console.error('Error deleting item', err);
            res.status(500).send('Error deleting item');
        });
        
    }
    
});
//About page

app.get("/about", function(req, res) {
    res.render("about")
});

app.listen(3000, function() {
    console.log("Server listening on port 3000.....")
});

