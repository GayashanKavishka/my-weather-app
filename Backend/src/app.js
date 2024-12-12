const express = require('express');
const hbs = require('hbs');
const path = require('path');
const wheatherdata = require('../utils/weather');

const cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/weather", (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: "You must provide an address"
        });
    }
    wheatherdata(req.query.address, (error, result) => {
        if(error) {
            return res.send({error});
        }
        res.send(result);
});
});


app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

