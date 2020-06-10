const mongoose = require("mongoose");

const categorieSchema = new mongoose.Schema({
  nom: { type: String, required: true, unique: true }
});

const Categorie = mongoose.model("Categorie", categorieSchema);

module.exports = Categorie;
