/**
 * Watch for file changes
 */
var gulp = require('gulp');
var browserSync = require('browser-sync');

/**
 * outputs changes to files to the console
 * @param event
 */
function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

/**
 * this task wil watch for changes to js, html, and css files and call the
 * reportChange method. Also, by depending on the serve task, it will instantiate a browserSync session
 */
gulp.task('watch', ['serve'], function() {
  //gulp.watch(gulp.config.pkg.srcPath, ['build-system', browserSync.reload]).on('change', reportChange);
  //gulp.watch("index.html", browserSync.reload).on('change', reportChange);
});
