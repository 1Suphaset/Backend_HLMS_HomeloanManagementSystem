module.exports = (sequelize, Datatype) => {
    const Insurance = sequelize.define("insurance", {
        insurance_id: {
            type: Datatype.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        sex: {
            type: Datatype.ENUM('Male', 'Female', 'Other'),
            allowNull: false
        },
        age: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        insured_period: {//ระยะเวลาคุ้มครอง
            type: Datatype.DATE,
            allowNull: false
        },
        insured_premium: { //ค่าเบี้ยประกัน
            type: Datatype.STRING,
            allowNull: false
        },
        
    });
    return Insurance;
};