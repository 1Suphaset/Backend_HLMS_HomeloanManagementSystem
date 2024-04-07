const express = require('express')
const app = express()
const cors = require('cors')
// Port setting
require('dotenv').config()
const PORT = process.env.PORT || 5000;


// middle ware เพื่อยอมรับไฟล์json form fontend
app.use(express.json())
// ยอมรับ key value 
app.use(express.urlencoded({extended: true}))
// 
app.use(cors())

// connect Database
const db = require('./app/models')
db.sequelize.sync({force:true}).then(() => { //force คือการ
    console.log('Database is connected... link:: http://localhost:8080/')
})

// default route
app.get('/' , (req,res) => {
    res.send('This is first page for Homeloan')
})



app.listen(PORT, () => {
    console.log('Server connected at port 5000 link:: http://localhost:5000/')
})