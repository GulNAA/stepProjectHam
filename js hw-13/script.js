function changeColors(){
    localStorage.setItem("backgroundColor","red")
   document.getElementsByTagName("body").style.color='localStorage.getItem("backgroundColor")'
    //console.log(localStorage.getItem("backgroundColor"));
}
changeColors()