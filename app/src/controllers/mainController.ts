module ContactManagerApp{
    export class MainController{
        public searchText : string = "";
        public users : IUser[];
        public selectedUser : IUser = null;
        public tabIndex : number = 0;
        
        constructor(private userService : UserService, 
                    private $mdSidenav : angular.material.ISidenavService,
                    private $mdToast : angular.material.IToastService){
            userService.loadAllUsers().then(users=>{
                 this.users = users;
                 this.selectedUser = users[0];
            })
        }  
        
        public toggleSideNav() : void {
            this.$mdSidenav('left').toggle();   
        }
        
        public selectUser(user : IUser) : void{
            this.selectedUser = user;
            var sideNav = this.$mdSidenav('left');
            if(sideNav.isOpen){
                sideNav.close();
            }
            this.tabIndex = 0;
        }
        
        public removeNote(note : Note): void{
            let idx = this.selectedUser.notes.indexOf(note);
            if(idx > -1){
                this.selectedUser.notes.splice(idx,1);
                this.openToast("Note deleted.");
            }
        }
        
        openToast(message : string) : void{
            this.$mdToast.show(
                this.$mdToast.simple()
                    .textContent(message)
                    .position('top right')
                    .hideDelay(3000)
            )
        }
    }
}

