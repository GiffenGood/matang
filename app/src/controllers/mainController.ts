module ContactManagerApp {
    export class MainController {
        public searchText: string = "";
        public users: User[];
        public selectedUser: User = null;
        public tabIndex: number = 0;

        constructor(private userService: UserService,
            private $mdSidenav: angular.material.ISidenavService,
            private $mdToast: angular.material.IToastService,
            private $mdDialog: angular.material.IDialogService,
            private $mdMedia: angular.material.IMedia,
            private $mdBottomSheet : angular.material.IBottomSheetService) {
            userService.loadAllUsers().then(users => {
                this.users = users;
                this.setUser(users[0]);
            })
        }

        public toggleSideNav(): void {
            this.$mdSidenav('left').toggle();
        }
        
        private setUser(user : User){
            this.selectedUser = user;
            this.userService.selectedUser = user;            
        }

        public selectUser(user: User): void {
            this.setUser(user);
            var sideNav = this.$mdSidenav('left');
            if (sideNav.isOpen) {
                sideNav.close();
            }
            this.tabIndex = 0;
        }

        public removeNote(note: Note): void {
            let idx = this.selectedUser.notes.indexOf(note);
            if (idx > -1) {
                this.selectedUser.notes.splice(idx, 1);
                this.openToast("Note deleted.");
            }
        }

        openToast(message: string): void {
            this.$mdToast.show(
                this.$mdToast.simple()
                    .textContent(message)
                    .position('top right')
                    .hideDelay(3000)
            )
        }

        public clearAllNotes($event) {
            let confirm = this.$mdDialog.confirm()
                .title('Are you sure you want to delete all notes?')
                .textContent('All notes will be deleted, you can\'t under this action.')
                .targetEvent($event)
                .ok('Yes')
                .cancel('No');

            this.$mdDialog.show(confirm).then(() => {
                this.selectedUser.notes = [];
                this.openToast('Cleared notes');
            })
        }

        public addUser($event) {
            let userFullScreen = (this.$mdMedia('sm') || this.$mdMedia('xs'));
            this.$mdDialog.show({
                    templateUrl: './dist/views/newUserDialog.html',
                    parent : angular.element(document.body),
                    targetEvent : $event,
                    controller : AddUserDialogController,
                    controllerAs : "ctrl",
                    clickOutsideToClose : true,
                    fullscreen : true
                })
                .then((user: User) => {
                    this.openToast("User Added");
                }, () => {
                    this.openToast("Cancelled");
                });
        }
        
        public showContactOptions($event){
            this.$mdBottomSheet.show({
                parent : angular.element(document.getElementById('wrapper')),
                templateUrl : './dist/views/contactSheet.html',
                controller : ContactPanelController,
                controllerAs : "cp",
                bindToController : true,
                targetEvent : $event                
            }).then((clickedItem)=>{
                clickedItem && console.log(clickedItem);
            })
        }
        
    }
}

