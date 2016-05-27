var ContactManagerApp;
(function (ContactManagerApp) {
    var MainController = (function () {
        function MainController(userService, $mdSidenav, $mdToast, $mdDialog, $mdMedia, $mdBottomSheet) {
            var _this = this;
            this.userService = userService;
            this.$mdSidenav = $mdSidenav;
            this.$mdToast = $mdToast;
            this.$mdDialog = $mdDialog;
            this.$mdMedia = $mdMedia;
            this.$mdBottomSheet = $mdBottomSheet;
            this.searchText = "";
            this.selectedUser = null;
            this.tabIndex = 0;
            this.newNote = new ContactManagerApp.Note('', null);
            userService.loadAllUsers().then(function (users) {
                _this.users = users;
                _this.setUser(users[0]);
            });
        }
        MainController.prototype.toggleSideNav = function () {
            this.$mdSidenav('left').toggle();
        };
        MainController.prototype.setUser = function (user) {
            this.selectedUser = user;
            this.userService.selectedUser = user;
        };
        MainController.prototype.selectUser = function (user) {
            this.setUser(user);
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
        MainController.prototype.clearAllNotes = function ($event) {
            var _this = this;
            var confirm = this.$mdDialog.confirm()
                .title('Are you sure you want to delete all notes?')
                .textContent('All notes will be deleted, you can\'t under this action.')
                .targetEvent($event)
                .ok('Yes')
                .cancel('No');
            this.$mdDialog.show(confirm).then(function () {
                _this.selectedUser.notes = [];
                _this.openToast('Cleared notes');
            });
        };
        MainController.prototype.addUser = function ($event) {
            var _this = this;
            var userFullScreen = (this.$mdMedia('sm') || this.$mdMedia('xs'));
            this.$mdDialog.show({
                templateUrl: './dist/views/newUserDialog.html',
                parent: angular.element(document.body),
                targetEvent: $event,
                controller: ContactManagerApp.AddUserDialogController,
                controllerAs: "ctrl",
                clickOutsideToClose: true,
                fullscreen: true
            })
                .then(function (createUser) {
                var temp = ContactManagerApp.User.fromCreate(createUser);
                _this.users.push(temp);
                _this.selectUser(temp);
                _this.openToast("User Added");
            }, function () {
                _this.openToast("Cancelled");
            });
        };
        MainController.prototype.showContactOptions = function ($event) {
            this.$mdBottomSheet.show({
                parent: angular.element(document.getElementById('wrapper')),
                templateUrl: './dist/views/contactSheet.html',
                controller: ContactManagerApp.ContactPanelController,
                controllerAs: "cp",
                bindToController: true,
                targetEvent: $event
            }).then(function (clickedItem) {
                clickedItem && console.log(clickedItem);
            });
        };
        MainController.prototype.addNote = function () {
            this.selectedUser.notes.push(this.newNote);
            this.newNote = new ContactManagerApp.Note('', null);
            this.openToast("Note added");
        };
        return MainController;
    })();
    ContactManagerApp.MainController = MainController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=mainController.js.map