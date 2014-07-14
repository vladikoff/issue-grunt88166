/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      target: {
        src: ['js/zzzzz.js', 'js/**/*.js'],
        dest: 'result.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
};
