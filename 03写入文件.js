const fs=require('fs')
fs.writeFile('./files/3.txt','shidahaoren',function(err){
    // console.log(err)

    // 参数1 要写入文件存放的路径
    // 参数2 要写入文件的内容
    // 参数3 回调函数
    if (err){
        return console.log('文件写入失败！'+err.message)
    }
    console.log('文件写入成功！')
})
