export default (sequelize, DataTypes) => {
    const Comment = sequelize.define('comment', {
        comment_id:{
            type: DataTypes.INTEGER,
            autoIncrement:true, 
            primaryKey: true
        },
        text: {
            type: DataTypes.TEXT,
            unique: true,
        }       
    });

    Comment.associate = (models) => {
        Comment.belongsTo(models.User, {
            foreignKey: 'user_id'
        })
        Comment.belongsTo(models.Post, {
            foreignKey: 'post_id'
        })
    };

    return Comment;
};