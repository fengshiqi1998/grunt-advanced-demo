module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        files: { 'dist/compiled.css': 'css/layout.less'  }
      } 
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['less']);

}
