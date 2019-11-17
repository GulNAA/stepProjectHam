function createNewUser() {
    name = prompt("Enter your Name");
    surname = prompt("Enter your Surname");
    date_birth = prompt('Enter your birthday', "dd.mm.yyyy");
    newUser = {
        firstName: name,
        lastName: surname,
        birthday: date_birth,

        getLogin: function () {
            return (this.firstName[0] + this.lastName).toLowerCase();
        },

        getAge: function () {
            let parts_of_date = this.birthday.split('.');
            let birth = new Date(parts_of_date[2], parts_of_date[1] - 1, parts_of_date[0])
            let today = new Date();
            return (today.getFullYear() - birth.getFullYear());
        },

        getPassword: function () {
            return (this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + this.birthday.split(".")[2]);

        }
    }
}

createNewUser();
// console.log(newUser.getLogin())
console.log(newUser.getAge())
console.log(newUser.getPassword())
