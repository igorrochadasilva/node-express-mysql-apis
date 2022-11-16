require("dotenv").config();

const express = require("express");
const bodyparser = require("body-parser");
const itemRoute = require("./src/routes/item.route");
const entradaRoute = require("./src/routes/entrada.route");
const saidaRoute = require("./src/routes/saida.route");
const usuarioRoute = require("./src/routes/usuario.route");
const itemReportRoute = require("./src/routes/item-report.route");
const fornecedorRoute = require("./src/routes/fornecedor.route");
const handleError = require("./src/middlewares/handleError");
const handle404Error = require("./src/middlewares/handle404Error");

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/api/itens", itemRoute);
app.use("/api/usuarios", usuarioRoute);
app.use("/api/entradas", entradaRoute);
app.use("/api/saidas", saidaRoute);
app.use("/api/item-reports", itemReportRoute);
app.use("/api/fornecedores", fornecedorRoute);

app.use(handle404Error);
app.use(handleError);

app.listen(process.env.PORTA, () => {
  console.log("rodando");
});
