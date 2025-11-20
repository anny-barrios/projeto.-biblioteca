
  const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/biblioteca', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB conectado com sucesso!"))
.catch(err => console.log("Erro ao conectar MongoDB:", err));
