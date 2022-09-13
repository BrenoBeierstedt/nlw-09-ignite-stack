import express from 'express';

const app = express();

app.get('/api/users', (req, res) => {
    console.log('aceaassou')
    res.json({success: true, message: 'acaessou'})
})

app.listen(process.env.PORT)