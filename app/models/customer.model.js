module.exports = (sequelize, Datatype) => {
    const Customer = sequelize.define("customer",{
        Customer_ID:{
            type: Datatype.INTEGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey:true
        },
        name:{
            type:Datatype.STRING,
            allowNull:false
        },
        position:{
            type:Datatype.STRING,
            allowNull:false
        }
    });
    return Customer;
};