export default (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        user_id:{
            type: DataTypes.INTEGER,
            autoIncrement:true, 
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,            
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,          
        },
        avatar: {
            type: DataTypes.STRING, 
        }, 
        age: {
            type: DataTypes.INTEGER, 
        }
    });

    User.associate = (models) => {
       
    };

    return User;
};