module ContactManagerApp{
    
    export class MainController{
        constructor(private $mdSidenav : angular.material.ISidenavService){
            
        }  
        
        public toggleSideNav() : void {
            this.$mdSidenav('left').toggle();   
        }
    }
    
}

