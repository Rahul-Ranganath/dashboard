const express = require('express');
const app = express()
const router = express.Router();
const cors = require('cors');
const https = require('https');
const http = require('http');

app.get('/data', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    //res.setHeader('Access-Control-Allow-Origin', 'http://srti012a.in623.corpintra.net/nagiosxi/api/v1/objects/hoststatus?apikey=o0qMq6o82alSktaJEcu4HnAUV64MM4Sa4jWtIEV0NgS73i7GuEKb0AlcGIXoL7R6&pretty=1:8000/data');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');  
    data = '';
    bodyChunks = [];
    
    
    
    http.get('http://srti012a.in623.corpintra.net/nagiosxi/api/v1/objects/hoststatus?apikey=o0qMq6o82alSktaJEcu4HnAUV64MM4Sa4jWtIEV0NgS73i7GuEKb0AlcGIXoL7R6&pretty=1',
     (resp) => {
     
    
      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
        //console.log("chunk",data);
        //console.log("data",data);
        // Object.keys(data).forEach(function(key) {
        // console.log("key",data[key]);
        // });
        //console.log("key",Object.keys(data.hoststatuslist))
      //   Object.keys(data).forEach(function(key) {
      //     // Get this property's value
      //     var value = data[key];
      //     // If not falsy (null, empty string, etc.)...
      //     if (value) {
      //         // What is it?
      //         switch (typeof value) {
      //             case "object":
      //                 // It's an object, recurse
      //                 console.log("ffrf",value);
                      
      //             case "string":
      //                 console.log("val",value) ;
      //                 // It's a string, decrypt
      //                 // var decipher = crypto.createDecipher('aes256', key);
      //                 // obj[key] = decipher.update(value, 'hex', 'utf8') + decipher.final('utf8');
                      
      //         }
      //     }
      // })
        //console.log("dfs",data)
      });
      //The whole response has been received. Print out the result.
      resp.on('end', () => {
        //console.log("key".Object.keys(data))
        //console.log(JSON.parse(data).explanation);
        //console.log(data)
        // bodyChunks.forEach(element => {
        //     console.log("elem",element)
        //     console.log("type",typeof(element))
            
        // });
        //data = Buffer.concat(bodyChunks);
        // Object.keys(data).forEach(function(key) {
        //     // Get this property's value
        //     var value = data[key];
        //     console.log("val",value)
        
        // // Object.keys(data).forEach(function(key) {
        // //    console.log("key",data[key]);
        //     });
        bodyChunks.push(data);

        //console.log("dasd",bodyChunks[0]);
        // Object.keys(bodyChunks[0]).forEach(function(key) {
        //     // Get this property's value
        //     var value = bodyChunks[0][key];
        //     //console.log("val",value)
        // });
        //JSON.parse(bodyChunks);
        console.log("type",typeof(bodyChunks))
            res.json(bodyChunks[0]);
      });
    
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    })



    console.log("eidfhie");
    
});






app.listen(8000, () => {
    console.log('Server started!');
  });