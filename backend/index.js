const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./metadata/routes');
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
mongoose.connect(
    // database link here,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err)
    })

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Port connected")
    }
})
app.use(cors());
app.use(express.json());
app.use(routes);