export default (sequelize, DataTypes) => {
    const Like = sequelize.define('like', {

    });

    Like.associate = (models) => {
        Like.belongsTo(models.User, {
            foreignKey: 'user_id',

        })
        Like.belongsTo(models.Post, {
            foreignKey: 'post_id',

        })
    };

    return Like;
};