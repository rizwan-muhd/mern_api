const express = require('express')
const router = express()
const { addStudent,getStudent,getAllStudent,deleteStudent} = require('../controllers/student')
// const upload = require('../middleware/imageUpload')
 
//post
router.post('/addstudent',addStudent)


//get
router.get('/getstudent',getStudent)
router.get('/getallstudent',getAllStudent)





//delete
router.delete('/deletestudent',deleteStudent)



module.exports=router;