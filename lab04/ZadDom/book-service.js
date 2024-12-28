const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const { Sequelize, DataTypes } = require("sequelize");

const app = express();
app.use(bodyParser.json());

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "books.db",
});

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, "SECRET_KEY");
    req.user = decoded;
    next();
  } catch {
    res.status(403).json({ message: "Invalid token" });
  }
};

const Book = sequelize.define("Book", {
  name: { type: DataTypes.STRING, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
  year: { type: DataTypes.INTEGER, allowNull: false },
});

sequelize.sync().then(() => console.log("Books database synced."));

app.get("/books", async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

app.get("/books/:id", async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
});

app.head("/books/:id", async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.status(200).end();
});

app.post("/books", authenticate, async (req, res) => {
  const { name, author, year } = req.body;

  try {
    const book = await Book.create({ name, author, year });
    res.status(201).json({ id: book.id });
  } catch (err) {
    res.status(500).json({ message: "Database error" });
  }
});

app.delete("/books/:id", authenticate, async (req, res) => {
  const result = await Book.destroy({ where: { id: req.params.id } });
  if (!result) return res.status(404).json({ message: "Book not found" });
  res.json({ message: "Book deleted" });
});

app.listen(3002, () => {
  console.log("Book Service is running on http://localhost:3002");
});
