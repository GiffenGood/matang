/// <reference path="./_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var app = angular.module('contactManagerApp', ['ngMaterial', 'ngMdIcons']);
    app.controller('mainController', ContactManagerApp.MainController);
    app.config(function ($mdIconProvider) {
        $mdIconProvider.icon('menu', './assets/svg/menu.svg', 24);
    });
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=boot.js.map