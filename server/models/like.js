export default (sequelize, DataTypes) => {
    const Like = sequelize.define('like', {
        like_id:{
            type: DataTypes.INTEGER,
            autoIncrement:true, 
            primaryKey: true
        }
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