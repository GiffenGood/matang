var ContactManagerApp;
(function (ContactManagerApp) {
    var MainController = (function () {
        function MainController(userService, $mdSidenav) {
            var _this = this;
            this.userService = userService;
            this.$mdSidenav = $mdSidenav;
            this.selectedUser = null;
            userService.loadAllUsers().then(function (users) {
                _this.users = users;
                _this.selectedUser = users[0];
            });
        }
        MainController.prototype.toggleSideNav = function () {
            this.$mdSidenav('left').toggle();
        };
        MainController.prototype.selectUser = function (user) {
            this.selectedUser = user;
            var sideNav = this.$mdSidenav('left');
            if (sideNav.isOpen) {
                sideNav.close();
            }
        };
        return MainController;
    })();
    ContactManagerApp.MainController = MainController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=mainController.js.map