module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
            'wp-content/themes/catuara-panozzo/library/compiled/scripts.js' : ['wp-content/themes/catuara-panozzo/library/js/kk-scripts.js']
        }//files
      }//my_target
    },//uglify
    watch: {
      scripts: {
        files: ['wp-content/themes/catuara-panozzo/library/js/*.js'],
        tasks: ['uglify']
      }//scripts
    } //watch
  }) // initConfig
  grunt.registerTask('default', 'watch');
} //exports
