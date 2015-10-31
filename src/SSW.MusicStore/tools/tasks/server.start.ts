import {serveSPA} from '../utils/server';

export = function serverStart(gulp, plugins) {
  return function () {
      serveSPA();
  };
};
