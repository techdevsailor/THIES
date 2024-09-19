const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 3000;

app.use(bodyParser.json());

app.get('/', (req,res) => {
    console.log ("[GET ROUTE]");
    res.send ('HELLO FROM HOMEPAGE');
});

app.listen(port,()=> console.log(`server running on port: http://localhost: ${port}`));

