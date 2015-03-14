/**
 * Build for production
 */

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var mkdirp = require('mkdirp');
var clean = require('gulp-clean');
var ShellTask = require('shell-task');
var sourcemaps = require('gulp-sourcemaps');
var printHeader = require('./default').printHeader;
var printInfo = require('./default').printInfo;
var fs = require('fs');
var filesize = require('filesize');
var gzipSize = require('gzip-size');

// Set output file here
var distFile = 'app.bundle.js';

/**
 * Cleans the files in the dist directory
 */
gulp.task('clean', ['jshint'], function () {
  return gulp.src(gulp.config.pkg.buildPath, {read: false})
  .pipe(clean({force: true}));
});

/**
 *  bundles the app using JSPM , minified and mangled
 */
gulp.task('bundle', function (done) {
  new ShellTask("jspm bundle app "+distFile+" -m").run(function(err,next){
    if(err) throw err;

    done();
    printHeader('GOOY !!');
    showStats();
  });
});

gulp.task('buildInfo', showStats);

gulp.task('build', ['bundle'],showStats);

gulp.task('copy-linked-files', function(){
  var links = getLinks("index.html");
  var scripts = getScripts("index.html");

  console.log(links);
  console.log(scripts);
});

function showStats() {
  if(!fs.existsSync(distFile)) return null;

  var stats = fs.statSync(distFile);
  var cssFile = distFile.substr(0,distFile.lastIndexOf("."))+".css";
  console.log(cssFile);
  var cssExists = fs.existsSync(cssFile);
  var cssStats;
  if(cssExists) cssStats = fs.statSync(cssFile);
  console.log("=============== REPORT ================");
  if(cssExists) console.log("Javascript Bundle");
  console.log("minified and mangled : " + filesize(stats.size));
  console.log("gzip: " + filesize(gzipSize.sync(fs.readFileSync(distFile))));

  if(cssExists) {
    console.log("");
    console.log("CSS Bundle");
    console.log("minified and mangled : " + filesize(cssStats.size));
    console.log("gzip: " + filesize(gzipSize.sync(fs.readFileSync(cssFile))));
  }
  console.log("=======================================");
}


function getLinks(path){
  var html = fs.readFileSync(path, "utf8");
  var re = /<link.*href=\"(.*)\"/g;
  var m,links=[];
  while ((m = re.exec(html)) !== null) {
    if (m.index === re.lastIndex) re.lastIndex++;
    links.push(m[1]);
  }
  return links;
}
function getScripts(path){
  var html = fs.readFileSync(path, "utf8");
  var re = /<script.*src=\"(.*)\"/g;
  var m,links=[];
  while ((m = re.exec(html)) !== null) {
    if (m.index === re.lastIndex) re.lastIndex++;
    links.push(m[1]);
  }
  return links;
}
