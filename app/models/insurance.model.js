module.exports = (sequelize, Datatype) => {
    const Insurance = sequelize.define("insurance", {
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
    return Insurance;
};