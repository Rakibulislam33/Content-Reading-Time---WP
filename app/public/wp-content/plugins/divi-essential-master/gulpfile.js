const gulp = require("gulp"),
  uglify = require("gulp-uglify"),
  removeLogging = require("gulp-remove-logging"),
  path = require("path"),
  csso = require("gulp-csso"),
  autoprefixer = require("gulp-autoprefixer"),
  concat = require("gulp-concat"),
  zip = require("gulp-zip");

const { name: projectName } = require("./package.json");

const jsSrc = `./assets/js/*.js`,
  destSrc = `./build/${projectName}/assets/js/`;

// minify module css file
const buildModulePath = `./build/${projectName}`;
const moduleCssPath = `${buildModulePath}/includes/modules/**/*.css`;

const uglifyModuleCss = () => {
  return gulp
    .src([
      moduleCssPath,
      `${buildModulePath}/assets/admin/**/*.css`,
      `${buildModulePath}/styles/admin-module.css`,
      `!${buildModulePath}/includes/modules/base/*.css`,
      `!${buildModulePath}/includes/modules/**/*.min.css`,
    ])
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(
      gulp.dest(function(file) {
        if (file.basename === "admin-module.css")
          return `${buildModulePath}/styles/`;
        return path.dirname(file.dirname);
      })
    );
};
gulp.task("minifyModuleCss", uglifyModuleCss);

// minify assets css
const assetsCssPath = `${buildModulePath}/assets/css/*.css`;
const assetsCssDest = `${buildModulePath}/assets/css/`;
const uglifyAssetsCss = () => {
  return gulp
    .src([assetsCssPath, `!${buildModulePath}/assets/css/*.min.css`])
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(
      gulp.dest(function(file) {
        // console.log(file.basename);
        return assetsCssDest;
      })
    );
};
gulp.task("minifyAssetsCss", uglifyAssetsCss);

// minify /style folder css for frontend
const styleCssPath = `./styles/*.css`;
const styleCssDest = `${buildModulePath}/styles/`;
const uglifyStyleCss = () => {
  return gulp
    .src([styleCssPath, "!./styles/*.min.css", "!./styles/admin-*.css"])
    .pipe(concat("style.min.css"))
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest(styleCssDest));
};

gulp.task("minifyStyleCss", uglifyStyleCss);

// Minify css for builder
const uglifyBuilderCss = () => {
  return gulp
    .src([
      moduleCssPath,
      "./includes/modules/base/*.css",
      "!./build/includes/modules/**/*.min.css",
    ])
    .pipe(concat("builder-style.min.css"))
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest(styleCssDest));
};
gulp.task("minifyBuilderCss", uglifyBuilderCss);

const minifyAssets = () => {
  return gulp
    .src([
      jsSrc,
      `./assets/admin/js/admin.js`,
      "!assets/js/*.min.js",
      "!assets/js/*.test.js",
    ])
    .pipe(removeLogging())
    .pipe(uglify())
    .pipe(
      gulp.dest(function(file) {
        if (file.basename === "admin.js")
          return `${buildModulePath}/assets/admin/js/`;
        return destSrc;
      })
    );
};

const pluginZip = () => {
  return gulp
    .src([`./build/**`])
    .pipe(zip(projectName + ".zip"))
    .pipe(gulp.dest("./"));
};

gulp.task("zip", pluginZip);

gulp.task("assets", minifyAssets);

const cleanjsx = () => {
  return gulp
    .src([
      "**",
      "!node_modules/**",
      "!gulpfile.js",
      "!*.md",
      "!*.json",
      "!*.lock",
      "!*.log",
      "!*.zip",
      "!includes/modules/**/*.js",
      "!assets/js/*.test.js",
      "!includes/modules/base/*.css",
      "!includes/modules/**/*.jsx",
      "!includes/fields/*.css",
      "!styles/style.css",
      "!includes/fields/*.js",
      "!includes/fields/**/*.jsx",
    ])
    .pipe(gulp.dest(`./build/${projectName}`));
};

gulp.task("cleanjsx", cleanjsx);
