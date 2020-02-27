export default (sequelize, DataTypes) => {
    const Post = sequelize.define('post', {
        text: {
            type: DataTypes.TEXT,           
        },       
    });

    Post.associate = (models) => {
        Post.belongsTo(models.User, {
            foreignKey: 'userId'
        })
    };

    return Post;
};