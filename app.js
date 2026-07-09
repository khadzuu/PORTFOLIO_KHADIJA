require("dotenv").config();

const express = require("express");

const path = require("path");

const connectDB = require("./config/database");

const contactRoutes = require("./routes/contactRoutes");
const indexRoutes = require("./routes/index");

const app = express();

connectDB();

app.use(express.json());

app.use(express.urlencoded({

    extended: true

}));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use("/contact", contactRoutes);
app.use("/", indexRoutes);

app.listen(process.env.PORT, () => {

    console.log(`Server running on ${process.env.PORT}`);

});
