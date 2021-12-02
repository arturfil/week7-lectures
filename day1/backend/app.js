// imports
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");

const app = express();

require('dotenv').config();

// db connection
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to db 🔌"))
    .catch(() => console.log("Couldn't connect to db 🥸"));

// middlwares = helpler functions
app.use(cors());
app.use(express.json());

// routes
app.use("/api/dishes", require("./routes/dish"))

// port and server listening;
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server running...⚡");
})