var ContactManagerApp;
(function (ContactManagerApp) {
    var MainController = (function () {
        function MainController(userService, $mdSidenav, $mdToast) {
            var _this = this;
            this.userService = userService;
            this.$mdSidenav = $mdSidenav;
            this.$mdToast = $mdToast;
            this.searchText = "";
            this.selectedUser = null;
            this.tabIndex = 0;
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
            this.tabIndex = 0;
        };
        MainController.prototype.removeNote = function (note) {
            var idx = this.selectedUser.notes.indexOf(note);
            if (idx > -1) {
                this.selectedUser.notes.splice(idx, 1);
                this.openToast("Note deleted.");
            }
        };
        MainController.prototype.openToast = function (message) {
            this.$mdToast.show(this.$mdToast.simple()
                .textContent(message)
                .position('top right')
                .hideDelay(3000));
        };
        return MainController;
    })();
    ContactManagerApp.MainController = MainController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=mainController.js.map