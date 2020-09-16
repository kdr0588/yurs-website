const { src, dest, parallel } = require("gulp");

const htmlmin = require("gulp-htmlmin");

const dirs = {
  html: {
    src: "./website/_site/*.html",
    dest: "./website/_site",
  },
};

function minifyHtml() {
  return src(dirs.html.src)
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(dest(dirs.html.dest));
}

exports.default = parallel(minifyHtml);
