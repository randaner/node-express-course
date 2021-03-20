const express = require('express');
const app = express();



const mockUserData = [
    {name: 'booger'},
    {name: 'big booger'}
]
app.get('/users', (req, res) => {
    res.json({
        success: true,
        message: 'wow, users',
        users: mockUserData
    })
})

app.listen(8000, () => {console.log('UP!')});