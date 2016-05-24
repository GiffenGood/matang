var ContactManagerApp;
(function (ContactManagerApp) {
    var AddUserDialogController = (function () {
        function AddUserDialogController($mdDialog) {
            this.$mdDialog = $mdDialog;
            this.avatars = ["svg-1", "svg-2", "svg-3", "svg-4"];
        }
        AddUserDialogController.prototype.cancel = function () {
            this.$mdDialog.cancel();
        };
        AddUserDialogController.prototype.save = function () {
            this.$mdDialog.hide(new ContactManagerApp.User("placeholder", "", "", []));
        };
        return AddUserDialogController;
    })();
    ContactManagerApp.AddUserDialogController = AddUserDialogController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=addUserDialogController.js.map