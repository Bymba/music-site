module.exports = function(grunt) {


  // Project configuration.
  grunt.initConfig({

    // Configuration to be run (and then tested).
    stylus: {
	  compile: {
		options: {
		  compress: false
		},
		files: {
		  'styles/style.css': 'stylus/general.styl',
		}
	  }
	},
	watch: {
		stylus: {
			files: 'stylus/*.styl',
			tasks: ['stylus'],
			options: {
			  debounceDelay: 250
			}
		}
	}
	
  });

	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['watch']);

};
