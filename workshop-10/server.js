const mongoose = require('mongoose');
const express = require('express');
const app = express(); // method and properties of express 
const chalk = require("chalk");

app.use(express.json());
app.use(require('./routes/user'));
const DataBase = 'mongodb+srv://aditya1810:NLsf6gkWaqjQ5T0e@cluster0.wgqpi.mongodb.net/userdata?retryWrites=true&w=majority'

mongoose.connect(DataBase, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("connection successful")
}).catch((err) => console.log("no connection", err));

app.listen(5000, () => {
    console.log(chalk.blue("Server is up and running on port 5000"));
});