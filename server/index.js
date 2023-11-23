const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;

const app = express();
const postRouter = require('./routes/posts')

//Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/', postRouter);


app.listen(port, ()=>console.log(`Server started on port ${port}....`));

