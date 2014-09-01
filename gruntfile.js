module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
            'wp-content/themes/catuara-panozzo/library/compiled/scripts.js' : ['wp-content/themes/catuara-panozzo/library/js/kk-scripts.js']
        }//files
      }//my_target
    },//uglify
    compass: {
      dev: {
        options: {
          config: 'config.rb'
        } // options
      }//dev
    }, //compass
    watch: {
      scripts: {
        files: ['wp-content/themes/catuara-panozzo/library/js/*.js'],
        tasks: ['uglify']
      },//scripts
      sass: {
          files: ['wp-content/themes/catuara-panozzo/library/sass/*.scss'],
          task: ['compass:dev']
      }, //sass
    } //watch
  }) // initConfig
  grunt.registerTask('default', 'watch');
} //exports
