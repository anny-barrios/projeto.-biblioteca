const db = require("../config/db");

module.exports = {
  listar(req, res) {
    db.all("SELECT * FROM livros", [], (err, rows) => res.json(rows));
  },

  criar(req, res) {
    const { titulo, autor_id, ano } = req.body;
    db.run(
      "INSERT INTO livros (titulo, autor_id, ano) VALUES (?, ?, ?)",
      [titulo, autor_id, ano],
      function () {
        res.json({ id: this.lastID });
      }
    );
  },

  atualizar(req, res) {
    const { id } = req.params;
    const { titulo, autor_id, ano } = req.body;
    db.run(
      "UPDATE livros SET titulo=?, autor_id=?, ano=? WHERE id=?",
      [titulo, autor_id, ano, id],
      () => res.json({ message: "Livro atualizado" })
    );
  },

  deletar(req, res) {
    db.run("DELETE FROM livros WHERE id=?", [req.params.id], () => {
      res.json({ message: "Livro deletado" });
    });
  },
};
