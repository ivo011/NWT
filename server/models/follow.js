export default (sequelize, DataTypes) => {
    const Follow = sequelize.define('follow', {
            
    });

    Follow.associate = (models) => {
        Follow.belongsTo(models.User, {
            foreignKey: 'user_id',
            foreignKey: 'follower_id'
            
        })        
    };

    return Follow;
};