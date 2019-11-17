let name=prompt("Enter your name here:");
let age=prompt("Enter your age here: ");
if (age<18){
    alert("You are not allowed to visit this website")
}
else if(age>=18 && age<=22){
    let sure=confirm("Are you sure you want to continue?")
    if (sure){
        alert("Welcome " + name)
    }
else {
        alert("You are not allowed to visit this website")
    }
}
else {
    alert("Welcome " + name)
}