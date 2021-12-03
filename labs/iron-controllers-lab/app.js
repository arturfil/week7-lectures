const express = require('express');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("connected to db"))
    .catch(() => console.log("Couldn't connect to db"));

app.use(express.json()); // this is for parsing in the req.body

app.use("/api/auth", require("./routes/user"));
app.use("/api/meetings", require("./routes/meeting"));

const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server running")
})