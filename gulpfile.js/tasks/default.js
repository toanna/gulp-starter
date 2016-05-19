var gulp            = require('gulp')
var gulpSequence    = require('gulp-sequence')
var getEnabledTasks = require('../lib/getEnabledTasks')

var defaultTask = function(cb) {
  var tasks = getEnabledTasks('watch')
  gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, 'static', 'watch', cb);

  /* Copy static files */
  //gulp.src('./src/static/*.*').pipe(gulp.dest('./public/static'));
}

gulp.task('default', defaultTask)
module.exports = defaultTask
