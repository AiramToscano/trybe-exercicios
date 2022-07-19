const { findAllBooks, findByIdBooks,
     createBooks, updateBooks, DeleteBooks, findAllBooksAuthor } = require('../services/BooksServices')


const BooksAll = async (req, res) => {
    const booksAll = await  findAllBooks();
   return res.status(200).json(booksAll);

}

const BooksByID = async (req, res) => {
    const { id } = req.params;
    if(!isNaN(id)) {
        const booksbyid = await  findByIdBooks(id);
        if(booksbyid != null) {
            return res.status(200).json(booksbyid);
        }
        return res.status(404).json({message: 'Book not found'})
    }
    const booksAll = await findAllBooksAuthor(id);
    if(booksAll.length > 0) {
        return res.status(200).json(booksAll);
    }
    return res.status(404).json({message: 'Author not found'})
}
const CreateBooks = async (req, res) => {
    const { title, author, pageQuantity } = req.body;
    const createBook = await createBooks(title, author, pageQuantity);
    return res.status(201).json(createBook);
}

const UpdateBooks = async (req, res) => {
    const { id } = req.params;
    const {title, author, pageQuantity, publisher } = req.body;
    const createBook = await updateBooks(id, title, author, pageQuantity, publisher);
    if(createBook) return res.status(200).json({message: "book alterado com sucesso"})
    return res.status(404).json({message: 'Book not found'})
}

const deleteBooks = async (req, res) => {
    const { id } = req.params;
    const createBook = await DeleteBooks(id);
    if(createBook) return res.status(200).json({message: "book deletado com sucesso"})
    return res.status(404).json({message: 'Book not found'})
}

module.exports = {
    BooksAll,
    BooksByID,
    CreateBooks,
    UpdateBooks,
    deleteBooks,
}