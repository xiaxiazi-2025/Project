//导入express
const express = require('express')
//创建服务器的实例对象
const app = express()

//导入并配置cors中间件
const cors = require('cors')
app.use(cors())


//配置解析表单数据的中间件
app.use(express.urlencoded({extended:false}))

//一定要在路由之前，封装 res.cc函数
app.use((req,res,next)=> {
    app.use(function (req, res, next) {
  // status = 0 为成功；status = 1 为失败；默认将 status 的值设置为 1，方便处理失败的情况
  res.cc = function (err, status = 1) {
    res.send({
      // 状态
      status,
      // 状态描述，判断 err 是错误对象 还是 字符串
      message: err instanceof Error ? err.message : err,
    })
  }
  next()
})
})


//导入并使用用户路由模块
const userRouter = require('./router/user')
app.use('api',userRouter)

//启动服务器
app.listen(3007, () => {
    console.log('api server runing at http://127.0.1:3007')
})
