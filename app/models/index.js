const config = require("../config/db");

const Datatype = require("sequelize");
const sequelize = new Datatype(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);
const db = {};
db.Datatype = Datatype;
db.sequelize = sequelize;

db.borrower = require("../models/borrower.model")(sequelize, Datatype);
db.project = require("../models/project.model")(sequelize, Datatype);
db.officer = require("../models/officer.model")(sequelize, Datatype);
db.interest = require("../models/interest.model")(sequelize, Datatype);
db.insurance = require("../models/insurance.model")(sequelize, Datatype);

module.exports = db;