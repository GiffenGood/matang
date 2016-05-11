var ContactManagerApp;
(function (ContactManagerApp) {
    var MainController = (function () {
        function MainController($mdSidenav) {
            this.$mdSidenav = $mdSidenav;
        }
        MainController.prototype.toggleSideNav = function () {
            this.$mdSidenav('left').toggle();
        };
        return MainController;
    })();
    ContactManagerApp.MainController = MainController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=mainController.js.map