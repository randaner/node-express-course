const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/login', (req,res) => {
    const username = req.body.username;
    const password = req.body.username;

    const mockUsername = 'fork';
    const mockPassword = 'spoon';

    if (username === mockUsername && password === mockPassword) {
        res.json({
            success:true,
            message: 'welcome',
            token: 'TOKEN'
        })
    } else {
        res.json({
            success:false,
            message:'bye'
        })
    }
});

const mockUserData = [
    {name: 'booger'},
    {name: 'big booger'}
]
app.get('/users/:id', (req, res) => {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'here is the requested id',
        users: req.params.id
    })
})

app.listen(8000, () => {console.log('UP!')});