import {join} from 'path';
import {PATH} from '../config';

export = function buildFonts(gulp, plugins, option) {
  return function () {
      return gulp.src(PATH.src.webconfig)
      .pipe(gulp.dest(join(PATH.dest.dev.all)));
  };
}
