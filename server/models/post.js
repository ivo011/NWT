import models from './index'
export default (sequelize, DataTypes) => {
    const Post = sequelize.define('post', {
        post_id:{
            type: DataTypes.INTEGER,
            autoIncrement:true, 
            primaryKey: true
        },
        text: {
            type: DataTypes.TEXT,           
        },   
        picture: {
            type: DataTypes.STRING,           
        },           
    });

    Post.associate = (models) => {
        Post.belongsTo(models.User, {
            foreignKey: 'user_id'
        })
        Post.hasMany(models.Like, {
             foreignKey: 'post_id' 
            });
    };

    return Post;
};
