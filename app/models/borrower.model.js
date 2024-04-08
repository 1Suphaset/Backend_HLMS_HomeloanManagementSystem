module.exports = (sequelize, Datatype) => {
    const Borrower = sequelize.define("borrower",{
        Borrower_id:{
            type: Datatype.INTEGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey:true
        },
        name:{
            type:Datatype.STRING,
            allowNull:false
        },
        phone:{
            type:Datatype.STRING,
            allowNull:false
        },
        sex:{
            type:Datatype.ENUM('Male', 'Female', 'Other'),
            allowNull:false
        },
        age:{
            type:Datatype.INTEGER,
            allowNull:false
        },
        career:{
            type:Datatype.STRING,
            allowNull:false
        },
        address:{
            type:Datatype.STRING,
            allowNull:false
        },
    });
    return Borrower;
};