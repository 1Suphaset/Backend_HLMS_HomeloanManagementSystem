module.exports = (sequelize, Datatype) => {
    const Employee = sequelize.define("employee",{
        Customer_ID:{
            type: Datatype.INTEGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey:true
        },
        ID_card:{
            type:Datatype.STRING,
            allowNull:false
        },
        name:{
            type:Datatype.STRING,
            allowNull:false
        },
        occupation:{
            type:Datatype.STRING,
            allowNull:false
        },
        Genderoccupation:{
            type:Datatype.STRING,
            allowNull:false
        }
    });
    return Employee;
};