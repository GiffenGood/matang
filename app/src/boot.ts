/// <reference path="./_all.ts" />

module ContactManagerApp{
    
    var app = angular.module('contactManagerApp',['ngMaterial','ngMdIcons']);
    app.controller('mainController',MainController);
    
    app.config(($mdIconProvider: angular.material.IIconProvider)=>{
        $mdIconProvider.icon('menu','./assets/svg/menu.svg',24);
    });
}