const { Router } = require('express');
const AuthorController = require('../controllers/AuthorController');
const BookController = require('../controllers/BookController');

const routes = Router();

// Rota de Autores
routes.post('/authors', AuthorController.create);

// Rotas de Livros
routes.post('/books', BookController.create);
routes.get('/books', BookController.index);
routes.put('/books/:id', BookController.update);
routes.delete('/books/:id', BookController.delete);

module.exports = routes;