export default (sequelize, DataTypes) => {
    const Follow = sequelize.define('follow', {
        follow_id:{
            type: DataTypes.INTEGER,
            autoIncrement:true, 
            primaryKey: true
        }            
    });

    Follow.associate = (models) => {
        Follow.belongsTo(models.User, {
            foreignKey: 'user_id',
            foreignKey: 'follower_id'
            
        })        
    };

    return Follow;
};