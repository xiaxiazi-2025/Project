const express = require('express')
const router = express.Router()

//注册新用户
router.post('/reguser',(req,res) => {
    res.send('reguser ok')
})
//登录
router.post('/login',(req,res) => {
    res.send('login ok')
})


module.express = router