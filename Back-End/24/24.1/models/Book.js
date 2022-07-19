const Book = (Sequelize, dataTypes) => {
    const Book1 = Sequelize.define("Book", {
        title: dataTypes.STRING,
        author: dataTypes.STRING,
        pageQuantity: dataTypes.INTEGER,
        createdAt: dataTypes.DATE,
        updatedAt: dataTypes.DATE,
        publisher: dataTypes.STRING,
    })
    return Book1;
}

module.exports = Book;