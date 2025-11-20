const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/biblioteca')
.then(() => {
    console.log("MongoDB conectado com sucesso!");

   
    console.log("Exemplo de Autor que seria inserido:", { nome: "João", nacionalidade: "Brasil" });
    console.log("Exemplo de Livro que seria inserido:", { titulo: "Livro X", ano: 2025, autor: "João" });
})
.catch(err => console.log("Erro ao conectar MongoDB:", err));


const autorSchema = new mongoose.Schema({
    nome: String,
    nacionalidade: String,
    dataNascimento: Date
});
const Autor = mongoose.model('Autor', autorSchema);

const livroSchema = new mongoose.Schema({
    titulo: String,
    ano: Number,
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'Autor' }
});
const Livro = mongoose.model('Livro', livroSchema);


app.post('/autores', async (req, res) => {
    const autor = new Autor(req.body);
    await autor.save();
    res.send(autor);
});

app.get('/autores', async (req, res) => {
    const autores = await Autor.find();
    res.send(autores);
});

app.put('/autores/:id', async (req, res) => {
    const autor = await Autor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(autor);
});

app.delete('/autores/:id', async (req, res) => {
    await Autor.findByIdAndDelete(req.params.id);
    res.send({ mensagem: "Autor removido" });
});

app.post('/livros', async (req, res) => {
    const livro = new Livro(req.body);
    await livro.save();
