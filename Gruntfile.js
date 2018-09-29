// npm install --save-dev load-grunt-tasks
module.exports = function(grunt){ 
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// Sass Task
		sass: {
			dev: {
				options: {
					style: 'expanded',
					sourcemap: 'none',
				},
				files: {
						'css/style.css': 'sass/style.scss'
				}
			},
		
			dist: {
				options: {
					style: 'compressed',
					sourcemap: 'none',
				},
				files: {
						'css/style.min.css': 'sass/style.scss',
				}
			}
		},
		// autoprefixer
		autoprefixer: {
			options: {
				browsers: ['last 20 versions']            
			},
			multiple_files: {
				expand:true,
				flatten:true,
				src: 'compiled/*.css',
				dest:''
			}
		},
		// Watch Task
		watch: {
			css: {
				files: ['**/*.scss', 'src/js/*.js'],
				tasks: ['sass','autoprefixer', 'babel']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');	
	grunt.loadNpmTasks('grunt-autoprefixer')
	grunt.registerTask('default', ['watch']);
};