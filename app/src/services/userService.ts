module ContactManagerApp {
    export class UserService {
        users = [
            {
                name: "Dave Dawson",
                avatar: "svg-1",
                bio: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                name: "Sally Sweeny",
                avatar: "svg-2",
                bio: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },

            {
                name: "Morgan Manion",
                avatar: "svg-3",
                bio: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                name: "Tina Tataloni",
                avatar: "svg-4",
                bio: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
        ];

        constructor(private $q: angular.IQService) {
        }

        public loadAllUsers() {
            return this.$q.when(this.users);                
        }
    }
    
    export interface IUser{
        name : string;
        avatar : string;
        bio : string;
    }
}
