const usuarioService = require("../services/usuario.service");

const create = async function (req, res) {
  const usuario = await usuarioService.create(req.body);
  res.send(usuario);
};

const encontrarTodos = async function (req, res) {
  const usuarios = await usuarioService.encontrarTodos();
  res.send(usuarios);
};

const encontrarPorId = async function (req, res) {
  const usuario = await usuarioService.encontrarPorId(req.params.id);
  res.send(usuario);
};

module.exports = {
  create: create,
  encontrarTodos: encontrarTodos,
  encontrarPorId: encontrarPorId,
};
