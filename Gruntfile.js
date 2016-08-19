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
    concat: {
      angularApp: {
        src: [
          "app/app.js",
          "app/directives/menu-directive.js",
          "app/directives/contact-us-directive.js",
          "app/controllers/navigation-controller.js",
          "app/controllers/menu-controller.js",
          "app/controllers/contact-us-controller.js",
          "app/controllers/dialog-controller.js",
          "app/controllers/footer-controller.js",
        ],
        dest: 'dist/app.js',
        options: {
          seperator: ';'
        }
      }
    },
    uglify: {
      angularApp: {
        files: {
          'dist/app.min.js': ['dist/app.js']
        }
      }
    },
    /* Watcher for sass task */
    watch: {
      css: {
        files: 'assets/sass/style.scss',
        tasks: ['sass'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['app/*.js','app/*/*.js'],
        tasks: ['concat:angularApp', 'uglify:angularApp']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('app', ['concat:angularApp', 'uglify:angularApp']);

};