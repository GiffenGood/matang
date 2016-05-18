/// <reference path="./_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var app = angular.module('contactManagerApp', ['ngMaterial', 'ngMdIcons']);
    app.controller('mainController', ContactManagerApp.MainController);
    app.controller('addUserDialogController', ContactManagerApp.AddUserDialogController);
    app.service('userService', ContactManagerApp.UserService);
    app.config(function ($mdIconProvider, $mdThemingProvider) {
        //$mdIconProvider.defaultIconSet("./assets/svg/avatars.svg", 128);
        $mdIconProvider.icon('svg-1', './assets/svg/man.svg', 128);
        $mdIconProvider.icon('svg-2', './assets/svg/man-1.svg', 128);
        $mdIconProvider.icon('svg-3', './assets/svg/woman.svg', 128);
        $mdIconProvider.icon('svg-4', './assets/svg/woman-1.svg', 128);
        $mdIconProvider.icon('menu', './assets/svg/menu.svg', 24);
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');
    });
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=boot.js.map