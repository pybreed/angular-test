module.exports = function (grunt) {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project Configuration
  grunt.initConfig({
    watch: {
      js: {
        files: ['app/**/*.js'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      }
    },

    jshint: {
      all: ['gruntfile.js', 'app/**/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    concurrent: {
      js: {
        tasks: ['watch:js'],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    connect: {
      dev: {
        options: {
          port: 9000,
          keepalive: true
        }
      }
    },

    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        updateConfigs: [],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['package.json', 'bower.json'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: false,
        pushTo: 'upstream',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
      }
    }
  });

  //Making grunt default to force in order not to break the project.
  grunt.option('force', true);

  grunt.registerTask('server', ['jshint', 'connect:dev']);
};
