module ContactManagerApp{
    export class MainController{
        public users : IUser[];
        
        constructor(private userService : UserService, private $mdSidenav : angular.material.ISidenavService){
            userService.loadAllUsers().then(d=>{
                 this.users = d;
            })
        }  
        public toggleSideNav() : void {
            this.$mdSidenav('left').toggle();   
        }
    }
}

