const express = require("express");
const app = express();
const port = 3000;
const bodyparser = require("body-parser");
const usuarios = [];
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get("/usuarios", (req, res) => {
  res.status(201).send(usuarios);
});

app.post("/usuarios", (req, res) => {
  const usuario = req.body;
  usuarios.push(usuario);
  res.send(usuario);
});

app.put("/usuarios/:id", (req, res) => {
  const index = usuarios.findIndex((user) => user.id === ~~req.params.id);
  const usuario = req.body;
  usuario.splice(index, 1, usuario);
  res.send(usuario);
});

app.delete("/usuarios/:id", (req, res) => {
  const index = usuarios.findIndex((user) => user.id === ~~req.params.id);
  usuarios.splice(index, 1);
  res.status(204).send({ message: "Usuário deletado com sucesso" });
});

app.listen(port, () => {
  console.log("exmaple app listen");
});
