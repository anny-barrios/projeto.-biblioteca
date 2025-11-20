const express = require("express");
const app = express();
app.use(express.json());

// Conectar ao banco
require("./config/database");

// Rotas
const livrosRoutes = require("./routes/livrosRoutes");
app.use("/livros", livrosRoutes);

module.exports = app;
