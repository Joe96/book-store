const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  }, 
  body: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model:'user',
      id: 'id',
      },
  },
  book_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model:'book',
      id: 'id'
    },
  },
},

{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'comment'
});

module.exports = Comment;