module.exports = {
  up: (queryInterface, DataType) => {
    queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataType.STRING,
      },
      email: {
        allowNull: false,
        type: DataType.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataType.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataType.DATE,
      },
      UpdatedAt: {
        allowNull: false,
        type: DataType.DATE,
      },
    });
  },

  down: (queryInterface) => {
    queryInterface.dropTable('Users');
  },
};
