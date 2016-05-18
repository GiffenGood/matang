var ContactManagerApp;
(function (ContactManagerApp) {
    var AddUserDialogController = (function () {
        function AddUserDialogController($mdDiallog) {
            this.$mdDiallog = $mdDiallog;
        }
        AddUserDialogController.prototype.cancel = function () {
            this.$mdDiallog.cancel();
        };
        AddUserDialogController.prototype.save = function () {
            this.$mdDiallog.hide(new ContactManagerApp.User("placeholder", "", "", []));
        };
        return AddUserDialogController;
    })();
    ContactManagerApp.AddUserDialogController = AddUserDialogController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=addUserDialogController.js.map