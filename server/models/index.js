var Sequelize = require('sequelize');

const sequelize = new Sequelize('twitter', 'postgres', '87654321');

const models = {

    user: sequelize.import('./user'),
    post: sequelize.import('./post')

};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;