module.exports = (sequelize, Datatype) => {
    const Officer = sequelize.define("officer",{
        officer_id:{
            type: Datatype.INTEGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey:true
        },
        name:{
            type:Datatype.STRING,
            allowNull:false
        },
        email:{
            type:Datatype.STRING,
            allowNull:false
        },
        phone:{
            type:Datatype.STRING,
            allowNull:false
        },
        team:{
            type:Datatype.STRING,
            allowNull:false
        },
        commissions:{
            type:Datatype.INTEGER,
            allowNull:false
        },
        username:{
            type:Datatype.STRING,
            allowNull:false
        },
        password:{
            type:Datatype.STRING,
            allowNull:false
        }
    });
    return Officer;
};