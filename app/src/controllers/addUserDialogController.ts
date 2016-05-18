module ContactManagerApp {

    export class AddUserDialogController {
        constructor(private $mdDialog: angular.material.IDialogService) {

        }

        cancel() {
            this.$mdDialog.cancel();
        }
        
        save(){
            this.$mdDialog.hide(new User("placeholder","","",[]))
        }
    }
}