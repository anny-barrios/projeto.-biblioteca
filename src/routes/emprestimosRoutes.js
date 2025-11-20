const express = require("express");
const router = express.Router();
const emprestimoController = require("../controllers/emprestimoController");

router.get("/", emprestimoController.listar);
router.post("/", emprestimoController.criar);
router.put("/:id", emprestimoController.atualizar);
router.delete("/:id", emprestimoController.deletar);

module.exports = router;
