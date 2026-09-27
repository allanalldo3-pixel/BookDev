const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  async create(req, res) {
    try {
      const { name, biography } = req.body;
      const author = await prisma.authors.create({
        data: { name, biography }
      });
      return res.status(201).json(author);
    } catch (error) {
      return res.status(400).json({ error: "Erro ao criar autor." });
    }
  }
};