let a=prompt("name","");
let b=prompt("age","");
if (b<18){
    alert("you are not allowed");
}
else if(18<=b<=20) {
    let r = (confirm("are you sure to continue"));
    if (r == true) {
        alert("welcome");
    }
else
    {
        alert("welcome" + a);
    }

}