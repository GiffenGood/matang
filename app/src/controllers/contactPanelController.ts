module ContactManagerApp {

    export class ContactPanelController {
        user : User;
        
        constructor(
            private userService : UserService,
            private $mdBottomSheet : angular.material.IBottomSheetService) {
                this.user = userService.selectedUser;
        }
        
        actions = [
            { name : 'Facebook', icon : 'facebook'},
            { name : 'Twitter', icon : 'twitter'},
            { name : 'Google+', icon : 'google+'},
            { name : 'Pinterest', icon : 'pinterest'}
        ]
        
        public submitContact(action) : void {
            this.$mdBottomSheet.hide(action);
        }
        
    }
    
}