module.exports = (sequelize, Datatype) => {
    const Interest = sequelize.define("interest", {
        Interest_ID: {
            type: Datatype.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        type: {
            type: Datatype.STRING,
            allowNull: false
        },
        product: {
            type: Datatype.STRING,
            allowNull: false
        },
        ir1: {//อัตราดอกเบี้ยระดับแรก
            type: Datatype.FLOAT,
            allowNull: false
        },
        ir2: {//อัตราดอกเบี้ยระดับสอง
            type: Datatype.FLOAT,
            allowNull: false
        },
        eir: {//อัตราดอกเบี้ยประจำปี
            type: Datatype.FLOAT,
            allowNull: false
        }

    });
    return Interest;
};