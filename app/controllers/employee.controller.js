const db = require('../models');
const Employee = db.employee;


exports.findAll = (req, res) => {
    //res.send("findAll"); //ตัวแสดงผล
    try {
        Employee.findAll({
            attributes: ["id", "name", "position"],

        })
            .then(employee => {
                res.send(employee);
            })
            .catch(error => {
                console.log(error.massage);
            });
    } catch (error) {
        console.log(error);
    }
};

exports.create = (req, res) => {
    try {
        if (!req.body.name || !req.body.position) { //ตรวจสอบค่าว่างเปล่าในname และ position
            res.status(400).json({ massage: "ไม่ได้ใส่อะไรเลย!!!!!" });
            return;
        }
        const employeeObj = {//รับค่า
            name: req.body.name,
            position: req.body.position,
            companyId: req.body.companyId
        };
        Employee.create(employeeObj)
            .then((data) => {
                // Insert to setting

                Setting.create({
                    theme: req.body.theme,
                    employeeId: data.id
                });
                res.status(200).json({ massage: "สร้างใหม่ละค้าบ" });
            })
            .catch(error => {
                res.status(400).json({ massage: error.massage });
            });
    } catch (error) {
        res.sendStatus(500);
    }
};

exports.addEmployeeToProject = (req, res) => {
    try {
        const junctionAttributes = {
            employeeId: req.body.employeeId,
            projectId: req.body.projectId
        };
        Employee_project.create(junctionAttributes)
            .then(() => {
                res.status(200).json({ message: "เพิ่มข้อมูลสำเร็จ" });
            })
            .catch(error => {
                res.status(400).json({ message: error.message });
            });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.findOne = (req, res) => {
        const id = req.params.id;
        Employee.findByPk(id, {
            include: [{
                model: Company,
                attributes: ["name"]
            }]
        })
            .then(data => {
                console.log(data);
                res.status(200).json(data)
            })
            .catch(error => {
                res.status(400).json({ massage: error.massage });
            })
        };


exports.update = (req, res) => {
    try {
        const id = req.params.id;// เป็นตัวที่อัพเดต
        const employeeObj = {
            name: req.body.name,
            position: req.body.position
        }
        Employee.update(employeeObj, {
            where: { id: id },//ตัวหลังมากจาก req.params.id;
        })
            .then(data => {
                if (data == 1) {
                    res.status(200).json({ massage: "อัพเดตเสร็จแล้ว!!!" });
                }
            })
            .catch(error => {
                res.status(400).json({ massage: error.massage });
            });
    } catch (error) {
        res.status(500).json({ massage: error.massage });
    }

};
exports.delete = (req, res) => {
    try {

        Employee.destroy({ where: { id: req.params.id } })
            .then(data => {
                if (data == 1) {
                    res.status(200).json({ massage: "ลบหมดละ" });
                }
            })
            .catch(error => {
                res.status(400).json({ massage: error.massage });
            })
    } catch (error) {
        res.status(500).json({ massage: error.massage });
    }
};