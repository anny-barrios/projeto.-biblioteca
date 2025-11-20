const express = require("express");
const router = express.Router();
const Livro = require("../models/livroModel");

// Listar livros
router.get("/", async (req, res) => {
  const livros = await Livro.find();
  res.json(livros);
});

module.exports = router;
