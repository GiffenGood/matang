module ContactManagerApp {
    export class UserService {
        users = [
            {
                name: "Dave Dawson",
                avatar: "svg-1",
                bio: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                notes: [{ title: "this is a test note", date: new Date("4/1/2016") },
                    { title: "Another day another note", date: new Date("05/04/2016") }]
            },
            {
                name: "Sally Sweeny",
                avatar: "svg-2",
                bio: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                notes: [{ title: "this is a test note", date: new Date("4/1/2016") },
                    { title: "Another day another note", date: new Date("05/04/2016") }]
            },

            {
                name: "Morgan Manion",
                avatar: "svg-3",
                bio: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                notes: [{ title: "this is a test note", date: new Date("4/1/2016") },
                    { title: "Another day another note", date: new Date("05/04/2016") }]
            },
            {
                name: "Tina Tataloni",
                avatar: "svg-4",
                bio: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                notes: [{ title: "this is a test note", date: new Date("4/1/2016") },
                    { title: "Another day another note", date: new Date("05/04/2016") }]
            }
        ];

        constructor(private $q: angular.IQService) {
        }

        public loadAllUsers() {
            return this.$q.when(this.users);
        }
    }

    export class User {
        constructor(public name: string,
            public avatar: string,
            public bio: string,
            public notes: Note[]
        ) {

        }
    }

    export class Note {
        constructor(public title: string, public date: Date) {

        }
    }
}
