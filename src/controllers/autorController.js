const db = require("../config/database");

module.exports = {
  listar(req, res) {
    db.all("SELECT * FROM autores", [], (err, rows) => res.json(rows));
  },

  criar(req, res) {
    const { nome } = req.body;
    db.run("INSERT INTO autores (nome) VALUES (?)", [nome], function () {
      res.json({ id: this.lastID });
    });
  },

  atualizar(req, res) {
    const { id } = req.params;
    const { nome } = req.body;
    db.run("UPDATE autores SET nome=? WHERE id=?", [nome, id], () => {
      res.json({ message: "Autor atualizado" });
    });
  },

  deletar(req, res) {
    db.run("DELETE FROM autores WHERE id=?", [req.params.id], () => {
      res.json({ message: "Autor deletado" });
    });
  },
};
