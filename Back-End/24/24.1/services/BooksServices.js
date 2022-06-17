const { Book } = require('../models')
const { Op } = require("sequelize");

const findAllBooks = async() => {
    const findall = await Book.findAll({
        order: [
            ['title', 'ASC']
        ]
    });
 return findall
}

const findAllBooksAuthor = async(Author) => {
    const author = Author.replace("_",' ')
    const findall = await Book.findAll({
        where: {
            author: { 
                [Op.like]: author
            }
        },
        order: [
            ['title', 'ASC']
        ]
    });
 return findall
}


const findByIdBooks = async(id) => {
    const finbyid = await Book.findByPk(id);
 return finbyid
}

const createBooks = async(title, author, pageQuantity, Publisher) => {
    const createbook = await Book.create({ 
        title: title,
        author: author,
        pageQuantity: pageQuantity,
        createdAt: new Date(),
        updatedAt: new Date(),
        publisher: Publisher,
    });
 return createbook
}

const updateBooks = async (idbook, title, author, pageQuantity, publisher ) => {
    const finbyid = await Book.findByPk(idbook);
    if(finbyid !== null) {
        finbyid.title = title;
        finbyid.author = author;
        finbyid.pageQuantity = pageQuantity;
        finbyid.publisher = publisher
        await finbyid.save();
  
      return true;
    }
    return false;
}

const DeleteBooks = async (idbook) => {
    const finbyid = await Book.findByPk(idbook);
    if(finbyid !== null) {
      finbyid.destroy();
      return true;
    }
    return false;
}

module.exports = {
    findAllBooks,
    findByIdBooks,
    createBooks,
    updateBooks,
    DeleteBooks,
    findAllBooksAuthor
}