const { BooksAll, BooksByID, CreateBooks, 
    UpdateBooks, deleteBooks } = require('./controllers/BooksController');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

app.get('/books', BooksAll)
app.get('/books/:id', BooksByID, )
app.post('/books', CreateBooks)
app.put('/books/:id', UpdateBooks)
app.delete('/books/:id', deleteBooks)