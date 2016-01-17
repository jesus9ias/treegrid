var grunt = require('grunt');

grunt.initConfig({
    stylus: {
      compile: {
        options: {
          paths: ['stylus'],
          import: [
            'nib/*'
          ]
        },
        files: {
          'dev/css/treegrid.css': 'dev/styl/treegrid.styl'
        },
      },
    },
    watch: {
      options: {
          livereload: true
      },
      stylesheets: {
          files: ['dev/styl/*.styl'],
          tasks: ['stylus']
      },
    }
});

grunt.loadNpmTasks('grunt-contrib-stylus');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', []);
grunt.registerTask('server', ['watch']);