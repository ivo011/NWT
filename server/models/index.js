var Sequelize = require('sequelize');

const sequelize = new Sequelize('twitter', 'postgres', '87654321', {
    dialect: 'postgres'
});

const models = {

    User: sequelize.import('./user'),
    Post: sequelize.import('./post'),
    Comment: sequelize.import('./comment'),
    Follow: sequelize.import('./follow'),
    Like: sequelize.import('./like'),
    

};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;