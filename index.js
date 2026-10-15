import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send("users are coming soon")
})

const users = [
    {id: 1, name: 'John Doe', email: 'john.doe@gmail.com'}, 
    {id: 2, name: 'John Doe', email: 'john.doe@gmail.com'}, 
    {id: 3, name: 'John Doe', email: 'john.doe@gmail.com'}, 
    {id: 4, name: 'John Doe', email: 'john.doe@gmail.com'}, 
]

app.get('/users', (req, res)=>{
    res.send(users)
})



app.listen(PORT, ()=>[
    console.log(`Server is runningon port ${PORT}`)
])