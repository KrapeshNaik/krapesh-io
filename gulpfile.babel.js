import gulp from 'gulp';
import clean from 'gulp-clean';
import copy from 'gulp-copy';
import sequence from 'gulp-sequence';
import htmlMinify from 'gulp-htmlmin';

gulp.task('clean_public', () => {
    return gulp
        .src('public', {
            read: false
        })
        .pipe(clean());
});

gulp.task('copy_files', () => {
    return gulp
        .src([
            'src/img/*',
            'manifest.json'
        ])
        .pipe(copy('public', {
            prefix: 1
        }));
});

gulp.task('html_min', () => {
    return gulp
        .src('src/index.html')
        .pipe(htmlMinify({
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true
        }))
        .pipe(gulp.dest('public'))
});

gulp.task('default',
    sequence(
        'clean_public',
        'copy_files',
        'html_min'
    )
);