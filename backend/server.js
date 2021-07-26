import express from 'express'
const app = express()


const port  = 5000;


app.use(express.json())//middleware


app.post('/api/users/create', (req, res, next)=>{ 
    console.log(req.body)
    next()
})


app.delete('/api/users/delete', (req, res)=>{ 
    console.log('delete')
    res.end()
})


app.use(()=>{console.log('middleware2')})


app.listen(port , ()=>{  
    console.log("server running on port 5000")
})

