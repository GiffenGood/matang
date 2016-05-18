module ContactManagerApp {

    export class AddUserDialogController {
        constructor(private $mdDiallog: angular.material.IDialogService) {

        }

        cancel() {
            this.$mdDiallog.cancel();
        }
        
        save(){
            this.$mdDiallog.hide(new User("placeholder","","",[]))
        }
    }
}