module.exports = (sequelize, DataTypes) => {
  var Todo = sequelize.define('Todo', {
    title: {
      DataTypes.STRING,
      allowNull: false
    }
  });

  Todo.associate = (models) => {
      Todo.hasMany(models.ToDoItem, {
        forignKey: 'todoId',
        as: 'todoItems'
      });
  };

  return Todo;
};
