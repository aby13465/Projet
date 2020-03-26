//imports librerie
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

//imports routes
const clients = require("./routes/clients");
const articles = require("./routes/articles");

const app = express();
const port = 4000;
const uri = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());

app.use("/clients", clients);
app.use("/articles", articles);

app.get("/", (request, response) => {
  response.send("ça marche!");
});

//connection à la base de donnée MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

//
mongoose.connection.once("open", () =>
  console.log("connecté à la base MongoDB")
);

//connection au serveur express
app.listen(port, () => console.log("serveur lancé au port " + port));