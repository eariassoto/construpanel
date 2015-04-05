module.exports = function (grunt) {

    grunt.initConfig({
        clean: {
            build: {
                src: ['build']
            }
        },
        useminPrepare: {
            html: "source/index.html",
            options: {
                dest: "build/"
            }
        },
        usemin: {
            html: ["build/index.html"]
        },
        copy: {
            build: {
                src: "source/index.html",
                dest: "build/index.html"
            },
            dist: {
                files: [
                    {
                        cwd: 'source/assets',
                        src: ['**'],
                        dest: 'build/assets',
                        expand: true
                    },
                    {
                        cwd: 'source/bower_components/font-awesome',
                        src: ['fonts/*'],
                        dest: 'build/',
                        expand: true
                    },
                    {
                        cwd: 'source/bower_components/open-sans-fontface',
                        src: ['fonts/**/*'],
                        dest: 'build/css/',
                        expand: true
                    }
                ]
            }
        },
        connect: {
            server: {
                options: {
                    port: 4000,
                    base: 'build',
                    hostname: '*'
                }
            }
        },
        watch: {
            copy: {
                files: ['source/**', '!source/**/*.css', '!source/**/*.js'],
                tasks: ['copy']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask(
        'build',
        'Compiles all of the assets and copies the files to the build directory.',
        [
            'clean',
            'copy',
            'useminPrepare',
            'concat',
            'cssmin',
            'uglify',
            'usemin'
        ]
    );

    grunt.registerTask(
        'serve',
        'Watches the project for changes, automatically builds them and runs a server.',
        ['connect', 'watch']
    );
};