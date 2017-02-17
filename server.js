const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const request = require('request');
const app = express();
 
const compiler = webpack(webpackConfig);//??
 
app.use(express.static(__dirname + '/www'));
 



//???
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {colors: true,},
  historyApiFallback: true,
}));


app.get('/weather/*', function(req, res){
  // console.log('data');

  var url = req.url.slice(9);
  console.log('url: ', url)
  // console.log('URLserver: ', req.url);

  const API_KEY = '3773e8edb073fedafca8e3d332628ac6'
  const latNlong = url.toString();
  
//////////////////////MORE CLEAR w/ errors and status code ///////////////////
  request(`http://api.openweathermap.org/data/2.5/weather?${latNlong}&APPID=${API_KEY}`, function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Err111or:', error);
    }
    //Check for right status code
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned:', response.statusCode);
    }
    //All is good. Print the body
    console.log('bo111dy: ', body);
    res.send(body);
  })
});


 
const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});