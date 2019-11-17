
 document.addEventListener("keydown", function(event) {

    if(event.code =="Enter"){
        event.preventDefault();
        document.getElementById("0").style.backgroundColor="blue";
    }else {
        document.getElementById("0").style.backgroundColor="black";

    }
         if(event.code =="KeyS"){
             event.preventDefault();
             document.getElementById("1").style.backgroundColor="blue";
         }else {
             document.getElementById("1").style.backgroundColor="black";

         }
         if(event.code =="KeyE"){
             event.preventDefault();
             document.getElementById("2").style.backgroundColor="blue";
         }else {
             document.getElementById("2").style.backgroundColor="black";

         }
         if(event.code =="KeyO"){
             event.preventDefault();
             document.getElementById("3").style.backgroundColor="blue";
         }else {
             document.getElementById("3").style.backgroundColor="black";

         }
         if(event.code =="KeyN"){
             event.preventDefault();
             document.getElementById("4").style.backgroundColor="blue";
         }else {
             document.getElementById("4").style.backgroundColor="black";

         }
         if(event.code =="KeyL"){
             event.preventDefault();
             document.getElementById("5").style.backgroundColor="blue";
         }else {
             document.getElementById("5").style.backgroundColor="black";

         }
     if(event.code =="KeyZ"){
         event.preventDefault();
         document.getElementById("6").style.backgroundColor="blue";
     }else {
         document.getElementById("6").style.backgroundColor="black";

     }


 }
)
