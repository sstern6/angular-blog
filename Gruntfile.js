'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      project: {
        app: ['app'],
        assets: ['<%= project.app %>/assets'],
        css: ['<%= project.assets %>/sass/style.scss']
      }

    });

    grunt.registerTask('default', [

    ]);

};