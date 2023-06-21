const express = require("express");
const cors = require("cors")
const pool = require("./db/db.js");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000

app.use(cors())

app.use(express.json());
console.log(process.env.MYSQL_HOST);

app.get("/", (req, res) => {

});

app.listen(port, () => {
    console.log(`Inicio servicio \nlocalhost:${port}`);
})