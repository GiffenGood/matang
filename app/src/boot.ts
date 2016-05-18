/// <reference path="./_all.ts" />
module ContactManagerApp{
    var app = angular.module('contactManagerApp',['ngMaterial','ngMdIcons']);
    app.controller('mainController',MainController);
    app.controller('addUserDialogController',AddUserDialogController);
    app.service('userService',UserService);
    
    app.config(($mdIconProvider: angular.material.IIconProvider,
                $mdThemingProvider : angular.material.IThemingProvider)=>{
        //$mdIconProvider.defaultIconSet("./assets/svg/avatars.svg", 128);
        $mdIconProvider.icon('svg-1','./assets/svg/man.svg',128);                            
        $mdIconProvider.icon('svg-2','./assets/svg/man-1.svg',128);
        $mdIconProvider.icon('svg-3','./assets/svg/woman.svg',128);
        $mdIconProvider.icon('svg-4','./assets/svg/woman-1.svg',128);
        $mdIconProvider.icon('menu','./assets/svg/menu.svg',24);
        $mdThemingProvider.theme('default')
           .primaryPalette('blue')
           .accentPalette('red'); 
    });
}