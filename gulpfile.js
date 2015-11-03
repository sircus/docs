'use strict'
var browserSync = require('browser-sync')
var reload = browserSync.reload
var cssnext = require('gulp-cssnext')
var del = require('del')
var fm = require('gulp-front-matter')
var ghpages = require('gulp-gh-pages')
var gulp = require('gulp')
var header = require('gulp-header')
var htmlmin = require('gulp-htmlmin')
var htmlhint = require('gulp-htmlhint')
var pkg = require('./package.json')
var rename = require('gulp-rename')
var runSequence = require('run-sequence')
var sitemap = require('gulp-sitemap')
var stylestats = require('gulp-stylestats')

var banner = [
  '/*!',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * Version <%= pkg.version %>',
  ' * <%= pkg.homepage %>',
  ' * Author : <%= pkg.author %>',
  ' * License : <%= pkg.license %>',
  ' */',
  ''
].join('\n')

var dirs = {
  src: './src/',
  dist: './publish/'
}

// ----------------------------------------------------------------

gulp.task('html', function() {
  var hb = require('gulp-hb')
  var data = require('./data')
  return gulp
    .src([dirs.src + '**/*.hbs', '!src/{partials,partials/**}'])
    .pipe(fm({
      property: 'meta'
    }))
    .pipe(hb({
      bustCache: true,
      debug: false,
      data: data,
      helpers: './node_modules/site-boilerplate-helpers/index.js',
      partials: dirs.src + 'partials/**/*.hbs'
    }))
    .pipe(rename(function(path) {
      if (path.basename == 'index') {
        path.extname = '.html'
      } else {
        path.dirname = (path.dirname ? path.dirname + '/' : '') + path.basename
        path.basename = 'index'
        path.extname = '.html'
      }
    }))
    .pipe(gulp.dest(dirs.dist))
})

gulp.task('htmlmin', function() {
  return gulp
    .src(dirs.dist + '**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(dirs.dist))
})

gulp.task('htmlhint', function() {
  return gulp
    .src(dirs.dist + '**/*.html')
    .pipe(htmlhint())
    .pipe(htmlhint.reporter('htmlhint-stylish'))
})

gulp.task('sitemap', function() {
  return gulp
    .src(dirs.dist + '**/*.html')
    .pipe(sitemap({
      siteUrl: pkg.homepage
    }))
    .pipe(gulp.dest(dirs.dist))
})

// ----------------------------------------------------------------

gulp.task('css', function() {
  return gulp
    .src(dirs.src + '/css/' + pkg.name + '.css')
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(cssnext({
      browsers: ['last 2 versions'],
      sourcemap: true,
      compress: true,
      features : {
        colorRgba: false,
        rem: false
      }
    }))
    .pipe(gulp.dest(dirs.dist + 'css'))
})

gulp.task('css:min', function() {
  return gulp
    .src(dirs.src + '/css/' + pkg.name + '.css')
    .pipe(cssnext({
      browsers: ['last 2 versions'],
      compress: true
    }))
    .pipe(gulp.dest(dirs.dist + 'css'))
})


gulp.task('stylestats', function() {
  gulp
    .src('./node_modules/sircus/dist/sircus.min.css')
    .pipe(stylestats({
      type: 'json',
      outfile: true,
    }))
    .pipe(rename('sircus.json'))
    .pipe(gulp.dest('.'))
})

// ----------------------------------------------------------------

gulp.task('copy:cname', function() {
  gulp
    .src('./src/CNAME')
    .pipe(gulp.dest(dirs.dist))
})

gulp.task('copy:icon', function() {
  gulp
    .src([
      './src/favicon.ico',
      './src/touch-icon-144.png',
    ])
    .pipe(gulp.dest(dirs.dist))
})

// ----------------------------------------------------------------

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: dirs.dist,
      open: 'external'
    }
  })
  gulp.watch([dirs.src + 'css/**/*.css'], ['css'])
  gulp.watch([dirs.src + 'js/*.js'], ['js'])
  gulp.watch([dirs.src + '**/*.hbs'], ['html'])
  gulp.watch([dirs.dist + '{css,js}/*.{css,js}']).on('change', reload)
  gulp.watch([dirs.dist + '*.html']).on('change', reload)
})

// ----------------------------------------------------------------

gulp.task('cleanup', function(cb) {
  return del([dirs.dist], cb)
})

// ----------------------------------------------------------------

gulp.task('ghpages', function() {
  return gulp
    .src(dirs.dist + '**/*')
    .pipe(ghpages({
      remoteUrl: pkg.repository.url,
      branch: 'gh-pages'
    }))
})

gulp.task('ghpages:staging', function() {
  return gulp
    .src(dirs.dist + '**/*')
    .pipe(ghpages({
      remoteUrl: 'git@github.com:blivesta/staging.git',
      branch: 'gh-pages'
    }))
})

// ----------------------------------------------------------------

gulp.task('minify', ['css:min', 'htmlmin'])


// ----------------------------------------------------------------

gulp.task('default', ['build'], function(cb) {
  runSequence(
    ['serve'],
    cb
  )
})

// ----------------------------------------------------------------

gulp.task('build', ['cleanup'], function(cb) {
  runSequence(
    ['stylestats'],
    'css',
    'html',
    [
      'htmlhint'
    ],
    cb
  )
})

// ----------------------------------------------------------------

gulp.task('staging', ['build'], function(cb) {
  runSequence(
    'copy:icon',
    ['minify'],
    'ghpages:staging',
    cb
  )
})

gulp.task('deploy', ['build'], function(cb) {
  runSequence(
    'copy:cname',
    'copy:icon',
    'sitemap',
    ['minify'],
    'ghpages',
    cb
  )
})
