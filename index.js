// Import express
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Temporary database (Array)
let books = [];
let id = 1;

// 🟢 1. CREATE – Add new book
app.post("/books", (req, res) => {
  const book = {
    id: id++,
    title: req.body.title,
    author: req.body.author
  };
  books.push(book);
  res.json({ message: "Book added", book });
});

// 🔵 2. READ – Get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// 🟡 3. UPDATE – Update book
app.put("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  book.title = req.body.title;
  book.author = req.body.author;

  res.json({ message: "Book updated", book });
});

// 🔴 4. DELETE – Delete book
app.delete("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  books = books.filter(b => b.id !== bookId);
  res.json({ message: "Book deleted" });
});

// Server start
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
