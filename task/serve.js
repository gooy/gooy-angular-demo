/**
 * Serve the app
 */
var gulp = require('gulp');
var browserSync = require('browser-sync');
var printHeader = require('./default').printHeader;
var fs = require("fs");
var express = require('express');
var compression = require('compression');
var errorhandler = require('errorhandler');
var serveStatic = require('serve-static');
var serveIndex = require('serve-index');
var favicon = require('serve-favicon');

var basepath = __dirname+'/../';

gulp.task('serve', function(done) {

  var app = express();

//app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.static('src'));
  app.use(compression());
  app.use(favicon(basepath+'favicon.ico'));

  //serve root dir as an index
  //app.use('/jspm_packages', serveIndex(basepath+'jspm_packages', {'icons': true}));
  //app.use('/', serveIndex(basepath+'views', {'icons': true}));

  app.use(serveStatic(basepath+'views', {'index': ['index.html']}));


  app.use(serveStatic(basepath, {'index': ['index.html']}));

  //app.use(serveStatic(basepath+'views', {'index': ['index.html']}));
  //app.use(serveStatic(basepath+'jspm_packages', {'index': ['index.html']}));
  //app.use('/config.js',express.static(basepath+'config.js'));
  //app.use('/jspm_packages',express.static('jspm_packages'));

  // only use in development
  /*if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler());
  }*/





  //app.set('view engine', 'ejs');
  app.get('/test',function(req,res,next){
    var path = req.url.split('?')[0];
    if(path==="/") path = "index";

    res.setHeader('Access-Control-Allow-Origin', '*');

    var file = basepath+"views/"+path+".html";
    /*if(!fs.existsSync(file)) {
      res.renderText("404: not found");
      next();
      return;
    }*/
    res.render(file);

    next();
  });


  app.listen(9000);

  browserSync({
    open: false,
    port: 9001,
    //listen to express running on port 9000
    proxy: "http://localhost:9000"
  }, function(){
    printHeader("Gooy !!");
    done();
  });
});


