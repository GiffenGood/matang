/// <reference path="./_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var app = angular.module('contactManagerApp', ['ngMaterial', 'ngMdIcons']);
    app.controller('mainController', ContactManagerApp.MainController);
    app.config(function ($mdIconProvider, $mdThemingProvider) {
        $mdIconProvider.icon('menu', './assets/svg/menu.svg', 24);
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');
    });
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=boot.js.map