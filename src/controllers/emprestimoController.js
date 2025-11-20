const db = require("../config/database");

module.exports = {
  listar(req, res) {
    db.all("SELECT * FROM emprestimos", [], (err, rows) => res.json(rows));
  },

  criar(req, res) {
    const { livro_id, cliente, data } = req.body;
    db.run(
      "INSERT INTO emprestimos (livro_id, cliente, data) VALUES (?, ?, ?)",
      [livro_id, cliente, data],
      function () {
        res.json({ id: this.lastID });
      }
    );
  },

  atualizar(req, res) {
    const { id } = req.params;
    const { livro_id, cliente, data } = req.body;
    db.run(
      "UPDATE emprestimos SET livro_id=?, cliente=?, data=? WHERE id=?",
      [livro_id, cliente, data, id],
      () => {
        res.json({ message: "Empréstimo atualizado" });
      }
    );
  },

  deletar(req, res) {
    db.run("DELETE FROM emprestimos WHERE id=?", [req.params.id], () => {
      res.json({ message: "Empréstimo deletado" });
    });
  },
};
