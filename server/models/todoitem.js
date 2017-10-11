module.exports = (sequelize, DataTypes) => {
  var TodoItem = sequelize.define('TodoItem', {
    content: {
      DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      DataTypes.BOOLEAN,
      defaultValue: false,
    }
  });

  TodoItem.associate = (models) => {
    TodoItem.belongsTo(models.Todo, {
      foreignKey: 'todoId',
      onDelete: 'CASCADE',
    });
  };

  return TodoItem;
};
