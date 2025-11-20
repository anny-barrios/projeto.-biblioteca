const express = require("express");
const router = express.Router();
const autorController = require("../controllers/autorController");

router.get("/", autorController.listar);
router.post("/", autorController.criar);
router.put("/:id", autorController.atualizar);
router.delete("/:id", autorController.deletar);

module.exports = router;

