/**
 * @param {Grunt} grunt
 */

/*global module */
module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        // read in the project settings from the package.json file into the pkg property
        pkg: grunt.file.readJSON('package.json'),

        bowercopy: {
            options: {
                runBower: true,
                destPrefix: 'public/libs'
            },
            libs: {
                files: {
                    'angular': 'angular',
                    'jquery': 'jquery/dist',
                    'bootstrap': 'bootstrap/dist/css'
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        copy: {
            main: {
                expand: true,
                flatten: true,
                filter: 'isFile',
                src: ['app/combined/*.js','styles/*.css'],
                dest: 'public/dist/'
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['app/moviesApp.js', 'app/moviesCRUDSvc.js', 'app/MoviesCtrl.js'],
                dest: 'app/combined/moviesCombined.js'
            }
        },
        clean: ["app/combined/"]
    });

    //Add all plugins that your project needs here
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('test', 'testing', function () {
        console.log('Testing sample grunt task!');
    });

    grunt.registerTask('default', ['test', 'bowercopy:libs', 'concat:dist','copy:main', 'clean']);
};