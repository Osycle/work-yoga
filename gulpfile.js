


var gulp 				= require('gulp'),
	del					= require('del'),
	browserSync 		= require('browser-sync'),
	sass 					= require('gulp-sass'),
	concat				= require('gulp-concat'),
	uglify				= require('gulp-uglifyjs'),
	cssnano				= require('gulp-cssnano'),
	rename				= require('gulp-rename'),
	imagemin				= require('gulp-imagemin'),
	cache					= require('gulp-cache'),
	autoprefixer		= require('gulp-autoprefixer');
	

// SASS
gulp.task('sass', () =>
	{
	return gulp.src( './app/sass/**/*.+(scss|sass)' )
			.pipe( sass().on('error', sass.logError) )
			.pipe( autoprefixer( {browsers: 'last 15 versions', cascade: false} ) )
			.pipe( gulp.dest('app/css/') ) // app/css default
			.pipe( browserSync.reload({stream:true}) );
	}
);

// SCRIPTS
gulp.task('scripts', () =>
	{	
	return gulp.src([
			'app/libs/additional/jquery.accordion.min.js',
			'app/libs/additional/jquery.fancybox.js'
		])
		.pipe( concat('additional-lib.min.js') )
		.pipe( uglify() )
		.pipe( gulp.dest('app/libs/additional/') );
	}
);
/*// STYLES
gulp.task('cssnano', ['sass'], () =>
	{
		return gulp.src('app/css/main.css')
		.pipe( cssnano({ reduceIdents :  false }) )
		.pipe(rename({suffix: '.min'}) )
		.pipe( gulp.dest('dist/css/') ); // app/css default
	}
);*/

// RELOADER BROWSER
gulp.task('browser-sync', () =>
	{
		browserSync({
			server: {baseDir: 'app/'},
			//proxy: "work/app",
			notify: false
		});
	}
);

/*// CLEAN DIR
gulp.task('clean', () =>
	{ return del.sync( 'dist/' ); }
);
// CLEAR
gulp.task('clear', () => 
	{
		return cache.clearAll();
	} 
)*/

// WATCHING
gulp.task('watch', ['browser-sync', 'sass', 'scripts'], () =>
	{
		gulp.watch('app/sass/**/*.+(scss|sass)', ['sass']);
		gulp.watch('app/*.html', browserSync.reload);
		gulp.watch('./**/*.php', browserSync.reload);
		gulp.watch('app/js/**/*.js', browserSync.reload);
	}
);


