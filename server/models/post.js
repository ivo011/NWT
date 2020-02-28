import models from './index'
export default (sequelize, DataTypes) => {
    const Post = sequelize.define('post', {
        text: {
            type: DataTypes.TEXT,           
        },       
    });

    Post.associate = (models) => {
        Post.belongsTo(models.User, {
            foreignKey: 'user_id'
        })
    };

    return Post;
};