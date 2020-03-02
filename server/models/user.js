export default (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            unique: true,
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