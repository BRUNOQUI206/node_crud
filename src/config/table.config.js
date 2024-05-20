const { Sequelize, DataTypes } = require('sequelize');
const variables = require('../config/variables.config');

const sequelize = new Sequelize(variables.var.DB_NAME, variables.var.DB_USER, variables.var.DB_PASS, {
  host: variables.var.DB_HOST,
  dialect: 'mysql'
});

const News = sequelize.define('News', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  author: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  date: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  title: {
    type: DataTypes.STRING(120),
    allowNull: true
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'news',
  timestamps: false
});

async function createTable() {
  const [results, metadata] = await sequelize.query("SHOW TABLES LIKE 'news'");
  if (results.length === 0) {
    await sequelize.sync();
    console.log('Table `news` has been created.');
  } else {
    console.log('Table `news` already exists.');
  }
}

module.exports = {
  createTable,
  sequelize
};
