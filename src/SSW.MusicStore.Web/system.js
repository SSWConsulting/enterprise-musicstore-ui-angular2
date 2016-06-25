/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    // map tells the System loader where to look for things
    var map = {
        '@angular': 'node_modules/@angular',
        'rxjs': 'node_modules/rxjs',
        "angular2-jwt": "node_modules/angular2-jwt/angular2-jwt.js"
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'main.js', defaultExtension: 'js', format: 'register' },
        '@angular/router': { main: 'index.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },

    };
    var ngPackageNames = [
      'common',
      'compiler',
      'core',
      'http',
      'platform-browser',
      'platform-browser-dynamic',
      'upgrade',
    ];
    // Add package entries for angular packages
    ngPackageNames.forEach(function (pkgName) {
        packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    });

    // No umd for router yet
    packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

    var config = {
        map: map,
        packages: packages
    }
    System.config(config);
})(this);
