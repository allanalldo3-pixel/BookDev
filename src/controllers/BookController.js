const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  // Criar Livro
  async create(req, res) {
    try {
      const { title, release_year, author_id } = req.body;
      const book = await prisma.books.create({
        data: { title, release_year, author_id }
      });
      return res.status(201).json(book);
    } catch (error) {
      return res.status(400).json({ error: "Erro ao criar livro." });
    }
  },

  // Listar Livros com Autores
  async index(req, res) {
    try {
      const books = await prisma.books.findMany({
        include: { author: true }
      });
      return res.status(200).json(books);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao listar livros." });
    }
  },

  // Atualizar Livro
  async update(req, res) {
    try {
      const { id } = req.params;
      const { title, release_year } = req.body;
      const book = await prisma.books.update({
        where: { id },
        data: { title, release_year }
      });
      return res.status(200).json(book);
    } catch (error) {
      return res.status(400).json({ error: "Erro ao atualizar livro." });
    }
  },

  // Excluir Livro
  async delete(req, res) {
    try {
      const { id } = req.params;
      await prisma.books.delete({
        where: { id }
      });
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: "Erro ao excluir livro." });
    }
  }
};