module.exports = (sequelize, Datatype) => {
    const Project = sequelize.define("project", {
        Project_ID: {
            type: Datatype.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        owner: {
            type: Datatype.STRING,
            allowNull: false
        },
        name: {
            type: Datatype.STRING,
            allowNull: false
        },
        loan_for: {//วัตถุประสงค์เงินกู้
            type: Datatype.STRING,
            allowNull: false
        },
        type: {
            type: Datatype.STRING,
            allowNull: false
        },
        amount: {//จำนวนเงิน
            type: Datatype.INTEGER,
            allowNull: false
        },
        price: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        progress: {//ความคืบหน้าของโครงการ
            type: Datatype.ENUM('Pending', 'In Progress', 'Completed'),

            allowNull: false
        },
        deal: {//ข้อมูลการตกลง
            type: Datatype.ENUM('Yes', 'No'),
            allowNull: false
        },
        modifier: {//ผู้แก้ไขปรับปรุง
            type: Datatype.STRING,
            allowNull: false
        },
        
    });
    return Project;
};