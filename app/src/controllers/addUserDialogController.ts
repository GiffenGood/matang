module ContactManagerApp {

    export class AddUserDialogController {
        user : CreateUser
 
        constructor(private $mdDialog: angular.material.IDialogService) {

        }

        cancel() {
            this.$mdDialog.cancel();
        }
        
        save(){
            this.$mdDialog.hide(this.user)
        }
        
        public avatars = ["svg-1","svg-2","svg-3","svg-4"];
    }
}