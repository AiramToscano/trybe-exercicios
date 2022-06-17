module.exports = {
  async up (queryInterface, Sequelize) {
  const BooksTable = queryInterface.createTable("Books", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: {
      allowNull: false,
      type: Sequelize.STRING
    },
    author: {
      allowNull: false,
      type: Sequelize.STRING
    },
    pageQuantity: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
  })
  return BooksTable;
  },

  async down (queryInterface, _Sequelize) {
   queryInterface.dropTable("Books");
  }
};

