const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://nicolecchh:TrrQM75BBRVLRoqSurTkFU8uVQoZH7UGVRkXXjI4PLERhXqNcP90qC2sT59jxVad49xYyH24zGXxACDbyHQStg%3D%3D@nicolecchh.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@nicolecchh@';

var db;

MongoClient.connect(url, function (err, client) {
  db = client.db('ItineraryPlanner');
  console.log("DB connected");
});

const app = express();

//Middleware
app.use(bodyParser.json());

const port = 3000;

app.listen(port, (req, res)=>{
    console.log(`Server started on port ${port}....`)
})

app.get("/", (req, res)=>{
    res.send("Hello");
})