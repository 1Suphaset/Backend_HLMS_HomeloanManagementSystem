module.exports = (sequelize, Datatype) => {
    const Project = sequelize.define("project", {
        Project_ID: {
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
    return Project;
};