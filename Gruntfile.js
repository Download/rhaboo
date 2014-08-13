module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      rhaboo: {
        files: {
          '<%= pkg.name %>.max.js' : ['src/unbrowserify.js']
        }
      },
      enq: {
        files: {
          'enq.js' : ['src/unbrowserify-enq.js']
        }
      }
    },
    uglify: {
      build: {
        src: '<%= pkg.name %>.max.js',
        dest: '<%= pkg.name %>.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['browserify', 'uglify']);

}