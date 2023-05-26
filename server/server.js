const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}));

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.use("/user", require("./routes/userRouter"));


app.listen(8080, () => {
    console.log("server start")
})