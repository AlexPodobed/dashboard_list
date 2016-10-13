// Karma configuration
// Generated on Wed Oct 12 2016 12:59:38 GMT+0200 (Central European Daylight Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'chai', 'mocha'],


        // list of files / patterns to load in the browser
        files: [
            // bower dependencies
            './app/bower_components/angular/angular.js',
            './app/bower_components/angular-sanitize/angular-sanitize.js',
            './app/bower_components/angular-animate/angular-animate.js',
            './app/bower_components/angular-resource/angular-resource.js',
            './app/bower_components/angular-ui-router/release/angular-ui-router.js',
            './app/bower_components/angular-toastr/dist/angular-toastr.tpls.js',
            './app/bower_components/ngstorage/ngStorage.js',
            './app/bower_components/angular-mocks/angular-mocks.js',
            './app/bower_components/sinonjs/sinon.js',
            './app/bower_components/jasmine-sinon/lib/jasmine-sinon.js',
            // project scripts
            './app/js/app.module.js',
            './app/js/contacts/contacts.service.js',
            './app/js/contacts/contacts.ctrl.js',
            './app/js/contacts/contacts.route.js',
            './app/js/components/notes/notes.directive.js',
            './app/js/components/navbar/navbar.directive.js',
            './app/js/components/footer/footer.directive.js',
            './app/js/components/sort_controls/sort_control.directive.js',
            './app/js/filters/utils.filters.js',
            './app/js/app.config.js',
            './app/js/app.run.js',
            // tests
            './app/js/**/*.spec.js',

            './app/js/**/*tmpl.html'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '**/*tmpl.html': ['ng-html2js']
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: 'app/'
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
};
