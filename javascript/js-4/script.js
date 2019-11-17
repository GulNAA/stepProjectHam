function createNewUser() {
  let  name = prompt("Enter your Name");
  let  surname = prompt("Enter your Surname");
     newUser = {
        firstName: name,
        lastName: surname,

        getLogin: function () {
            return (this.firstName[0] + this.lastName).toLowerCase();
        }

    }
}

createNewUser();
console.log(newUser.getLogin())
