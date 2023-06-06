const express = require("express");
const app = express();
const cors = require('cors');

const Voter = require("./models/voters");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");


mongoose.connect("mongodb://127.0.0.1:27017/VoterCollection")
    .then(() => {
        console.log("Connected to database");
    })
    .catch(() => {
        console.log("Failed to connect >Till here");
    });

app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Working");
})
app.post("/api/signup", async (req, res) => {
    console.log(req.body);
    console.log("Working");
    try {
        const voter = await Voter.create({
            name: req.body.name,
            vid: req.body.vid
        });
        console.log("Signup");
        res.json({ status: 'ok' });
    }
    catch (err) {
        res.json({ status: 'error' });
    }

    // await collection.insertMany([data]);

});

app.post("/api/login", async (req, res) => {
    const user = await Voter.findOne({
        name: req.body.name,
        vid: req.body.vid
    });

    if (user){
        const token = jwt.sign({
            name: user.name,
            vid: user.vid
        }, 'pwdhash#2727'
        )
        res.send({ status: 'ok', user: token });
    }
    else {
        res.send({ staus: 'error' });
    }

});

app.listen(1337, () => {
    console.log("Working server")
});
