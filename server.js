const express = require('express');
const app = express();



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