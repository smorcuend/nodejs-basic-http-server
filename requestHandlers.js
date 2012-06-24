
//var exec = require("child_process").exec;
var querystring = require("querystring");

function init(response, postData) {
  console.log("Handler of 'init' request was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="5" cols="20"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
  
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, dataPosteada) {
  console.log("Handler of 'upload' request was called.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("You sent: 'text' with value: " + querystring.parse(dataPosteada)["text"]);
  response.end();
}

exports.init = init;
exports.upload = upload;
