const mongoose = require("mongoose");

const EmprestimoSchema = new mongoose.Schema({
  livro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Livro",
    required: true
  },
  usuario: { type: String, required: true },
  dataEmprestimo: { type: Date, default: Date.now },
  dataDevolucao: { type: Date }
});

module.exports = mongoose.model("Emprestimo", EmprestimoSchema);
