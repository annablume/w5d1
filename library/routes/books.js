const router = require("express").Router();
const Book = require('../models/Book');

router.get('/books', (req, res) => {
  // get all the books from the database -> find() returns all the documents
  Book.find().then(booksFromDB => {
    console.log(booksFromDB);
    // render a books view to display them
    res.render('books', { booksList: booksFromDB })
  }).catch(err => {
    console.log(err);
  })
})

router.post('/books', (req, res) => {
  console.log(req.body);
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;
  const rating = req.body.rating;
  // const { title, author, decription, rating } = req.body; 
  console.log(title, author, description, rating);
  Book.create({
    title: title,
    author: author,
    description: description,
    rating: rating
  })
    .then(book => {
      console.log('this book was just created: ', book);
      res.redirect(`/books/${book._id}`)
      // res.render('bookDetails', { bookDetails: book });
    })
})

router.get('/books/delete/:id', (req, res) => {
  const bookId = req.params.id;
  Book.findByIdAndDelete(bookId)
    .then(() => {
      // redirect to the books list
      res.redirect('/books')
    })
    .catch(err => {
      console.log(err);
    })
})

router.get('/books/edit/:id', (req, res) => {
  const bookId = req.params.id;
  Book.findById(bookId)
    .then(bookFromDB => {
      console.log(bookFromDB);
      res.render('bookEdit', { book: bookFromDB });
    })
})

router.get('/books/add', (req, res) => {
  res.render('bookForm');
})

router.get('/books/:id', (req, res) => {
  const bookId = req.params.id;
  // get the book with this id
  Book.findById(bookId)
    .then(book => {
      console.log(book);
      // render a book details view
      res.render('bookDetails', { bookDetails: book });
    })
})

router.post('/books/edit/:id', (req, res) => {
  const bookId = req.params.id;
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;
  const rating = req.body.rating;
  // const { title, author, decription, rating } = req.body; 
  Book.findByIdAndUpdate(bookId, {
    title: title,
    description: description,
    author: author,
    rating: rating
  })
    .then(book => {
      res.redirect(`/books/${book._id}`);
    })
    .catch(err => {
      console.log(err);
    })
})

module.exports = router;