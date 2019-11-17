let number=prompt("Enter your number");
if (number!=""){
    for (let i=0; i<=number; i++){
        if (i%5==0){
            console.log(i)
        }
    }
}else{
    console.log("Sorry, no numbers")
}