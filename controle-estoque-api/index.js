require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser");
const app = express();

const itemRoute = require("./src/routes/item.route");
const usuarioRoute = require("./src/routes/usuario.route");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use("/api/itens", itemRoute);
app.use("/api/usuarios", usuarioRoute);

app.listen(process.env.PORTA, () => {
  console.log("rodando");
});
