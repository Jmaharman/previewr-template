var path = require('path');

var siteFolder = './site/';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bgShell: {
      runPreviewr: {
        cmd: 'previewr',
        bg: true
      }
    },

    less: {
        basic: {
            files: {
                'site/content/main.css': 'site/content/main.less',
            }
        }
    },

    watch: {
      html: {
        files: [siteFolder + '**/*.html'],
        options: {
		      livereload: true,
      		interrupt: true
        }
      },
      stylesheets: {
        files: [siteFolder + '**/*.less'],
        tasks: ['less'],
        options: {
          livereload: true,
          interrupt: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bg-shell');

  grunt.registerTask('compile', ['less']);

  // Run the server and watch for file changes
  grunt.registerTask('server', ['bgShell:runPreviewr', 'watch']);

  // Default task(s).
  grunt.registerTask('default', ['compile']);
};
