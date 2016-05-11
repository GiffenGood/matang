/// <reference path="./_all.ts" />
module ContactManagerApp{
    var app = angular.module('contactManagerApp',['ngMaterial','ngMdIcons']);
    app.controller('mainController',MainController);
    app.service('userService',UserService);
    
    app.config(($mdIconProvider: angular.material.IIconProvider,
                $mdThemingProvider : angular.material.IThemingProvider)=>{
        $mdIconProvider.icon('menu','./assets/svg/menu.svg',24);
        $mdThemingProvider.theme('default')
           .primaryPalette('blue')
           .accentPalette('red'); 
    });
}