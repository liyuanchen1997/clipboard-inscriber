const express = require('express')
const path = require('path')
const app = express()
const {readFile,writeFile} = require('./utils/utils')
app.use(express.static('./public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post('/get_data',(req,res)=>{
    readFile(path.join(__dirname,'./data/index.json')).then(resData=>{
        res.json({
            code:200,
            data:JSON.parse(resData)
        })
    })
    
})

app.post('/set_data',(req,res)=>{
    let setDataText = req.body.data
    readFile(path.join(__dirname,'./data/index.json')).then(resData=>{
        let resAllData = JSON.parse(resData)
        resAllData.unshift(setDataText)
        writeFile('./data/index.json',JSON.stringify(resAllData)).then(()=>{
            res.json({
                code:200,
                msg:'添加成功'
            })
        })
        
    })
})

app.get('/close',(req,res)=>{
    res.json({
        code:200
    })
    setTimeout(()=>{
        process.exit(0)
    },1000)
})
const port = 5656
app.listen(port, () => console.log(`Example app listening on port ${port}! http://localhost:${port}`))