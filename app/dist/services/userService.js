var ContactManagerApp;
(function (ContactManagerApp) {
    var UserService = (function () {
        function UserService($q) {
            this.$q = $q;
            this.users = [
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
        }
        UserService.prototype.loadAllUsers = function () {
            return this.$q.when(this.users);
        };
        return UserService;
    })();
    ContactManagerApp.UserService = UserService;
    var User = (function () {
        function User(name, avatar, bio, notes) {
            this.name = name;
            this.avatar = avatar;
            this.bio = bio;
            this.notes = notes;
        }
        return User;
    })();
    ContactManagerApp.User = User;
    var Note = (function () {
        function Note(title, date) {
            this.title = title;
            this.date = date;
        }
        return Note;
    })();
    ContactManagerApp.Note = Note;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=userService.js.map