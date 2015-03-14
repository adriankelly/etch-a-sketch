module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

            // 2. Configuration for concatinating files goes here.
        autoprefixer: {

          options: {
            // Task-specific options go here.
            browsers: ['last 2 versions', 'ie 8', 'ie 9']
          },
          multiple_files: {
            expand: true,
            flatten: true,
            src: 'css/*.css', // -> src/css/file1.css, src/css/file2.css
            dest: 'css/ap/' // -> dest/css/file1.css, dest/css/file2.css
          }
        },


        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: 'css/ap',
              src: ['*.css', '!*.min.css'],
              dest: 'css/ap/build',
              ext: '.min.css'
            }]
          }
        },

        concat: {   
          dist: {
            src: [
              'js/*.js', // All JS in the folder
            ],
            dest: 'js/build/production.js',
          }
        },

        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        }





    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['autoprefixer', 'cssmin', 'concat', 'uglify']);

};