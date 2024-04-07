module.exports = (sequelize, Datatype) => {
    const Interest = sequelize.define("interest", {
        Interest_ID: {
            type: Datatype.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Datatype.STRING,
            allowNull: false
        },
        type: {
            type: Datatype.STRING,
            allowNull: false
        }
    });
    return Interest;
};