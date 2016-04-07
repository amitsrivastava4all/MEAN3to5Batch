var http = require("http");
http.createServer(function(request, response){
    var url = request.url;
    var method=request.method;
    response.writeHead(200,{'content-type':'text/html'});
    console.log("URL is "+url+" and method is "+method);
    /*if(url==='/index.html' || url==='/angular.min.js')*/
    if(isStaticFile(url)!=-1)
    {
        var fs = require("fs");
        var path = require("path");
        var filePath = path.join(__dirname,url);
        console.log("DIR NAME ",__dirname);
        console.log("File Path is ",filePath);
        fs.createReadStream(filePath).pipe(response);
       /* fs.readFile(filePath,function(error,content){
            if(error){
             response.end("File not found...");
            }
            else{
            response.end(content);
            }
        });*/
    }
    else
    if(url.indexOf('/login')!=-1 && method==='GET'){
        var urlObject = require("url");
        // this will convert url into object
        var object = urlObject.parse(url,true).query;
        console.log("object is ",object);
        if(object.userid==='amit' && object.pwd==='123'){
            response.end("Welcome "+object.userid);
        }
        else
        {
            response.end("Invalid Userid or Password");
        }

    }
    else{

    //response.write('Hello Client');
    response.end('<b>Hello Client</b>');
    }
}).listen(9999,function(){
    console.log("Server Start...");
});

function isStaticFile(url){
var extension = [".html",".css",".js",".jpg",".mp3"];
    var ext = require("path").extname(url);
    return extension.indexOf(ext);
}