module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
            '_wp-content/themes/catuara-panozzo/library/scripts.js' : ['_wp-content/themes/catuara-panozzo/library/js/kk-scripts.js']
        }//files
      }//my_target
    }//uglify
  }) // initConfig
} //exports
