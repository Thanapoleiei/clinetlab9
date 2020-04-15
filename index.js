let express = require('express');
let app = express();
app.get('/', (req, res) => {
    console.log('Hello world')
    res.send('Hello World')
} );

app.get('/crash',(req,res) => {
    console.log('Crash')
    res.send('Crash')
    process.exit(1)
})
app.listen(80, () => console.log('server running at ',80));