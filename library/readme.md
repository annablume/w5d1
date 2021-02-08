## Library CRUD Project

### Boilerplate created with Ironlauncher
```bash
$ npx ironlauncher
```

### To run the application
```bash
$ npm run dev
```

### Features

Seed the database with the json data ✅

When i visit the URL /books i want to see a list of all my book titles from the database ✅
- we need a route /books
- we need to get all the books from the books collection
- we need to pass the books into a view 'books'
- in the view we need to iterate over the books and display the title

When i click on a book title from the list i want to be taken to a route /books/:id and want to see all the details from the book

When i click on a link 'add a book' under the books list i am taken to a form to add a book

When i click on Add i want to be taken to the detail view of the added book and the book should be added to the database

When i click on a link 'edit' under the book details i want to be taken to a form where i can edit the book.

When i click on edit i want to be taken to the book details view

When i click on a link 'delete' under a book details view i want to be able to delete the book and be redirected to the books list