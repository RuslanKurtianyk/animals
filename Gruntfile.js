module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      sass: {                              
        dist: {                            
          options: {                       
            style: 'expanded'
          },
          files: {                         
            'assets/css/style.css': 'assets/sass/style.scss', 
          }
        }
      },
      /* Watcher for babel task */
        watch: {
            css: {
                files: 'assets/sass/style.scss',
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            }
        }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['watch']);

};