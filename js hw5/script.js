let firstName=prompt("enter your first name")
let lastName=prompt("enter your last name")
let birthday=prompt("enter your birth date (dd/mm/yyyy)")
function createNewUser(firstName,lastName) {
    let newUser={name:firstName, surname:lastName};
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();
    if(dd<10)
    {
        dd='0'+dd;
    }

    if(mm<10)
    {
        mm='0'+mm;
    }
    today = mm+'/'+dd+'/'+yyyy;
    let todayMs=(Date.parse(today))
    let birthdayMs=(Date.parse(birthday))
   let age=Math.round((todayMs - birthdayMs)/31536000000)
console.log("your age is:" + age)}
function getLogin(firstName,lastName) {
    let login=firstName[0] + lastName  ;
    let str=login.toLowerCase()
    console.log("Your login is:" + str)
}

createNewUser(firstName,lastName)
getLogin(firstName,lastName)

