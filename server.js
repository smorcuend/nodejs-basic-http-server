

var http = require("http");
var url = require("url");

//var util=require('util');
var exec=require('child_process').exec;

function iniciar(route, handle) {

  function onRequest(request, response) {

  		exec('date',function(err,stdout,stderr){
			//util.puts("Salida estandar del comando 'date':");
			//util.puts(stdout);
			console.log(stdout);
		});
        var dataPosteada = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Peticion para " + pathname + " recibida.");

        request.setEncoding("utf8");

        request.addListener("data", function(trozoPosteado) {
          dataPosteada += trozoPosteado;
          console.log("Recibido trozo POST '" + trozoPosteado + "'.");
    });

    request.addListener("end", function() {
      route(handle, pathname, response, dataPosteada);
    });

  }

  http.createServer(onRequest).listen(8888);
  console.log("Servidor Iniciado");
}

exports.iniciar = iniciar;
