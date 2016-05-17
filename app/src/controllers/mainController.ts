module ContactManagerApp{
    export class MainController{
        public users : IUser[];
        public selectedUser : IUser = null;
        
        constructor(private userService : UserService, private $mdSidenav : angular.material.ISidenavService){
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
        }
    }
}

