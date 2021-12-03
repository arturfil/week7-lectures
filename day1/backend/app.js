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

// middlwares = helper functions
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => res.send("WOKRS"))
app.use("/api/dishes", require("./routes/dish"));
app.use("/api/auth", require("./routes/user"));

// port and server listening;
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server running...⚡");
})