var counter=0;
function btnI(){
    
    document.getElementById("count").innerHTML=counter++;
    document.getElementById("count").style.fontSize="150px";
    document.getElementById("count").style.color="rgb(188, 139, 139)";
}
function btnIi(){
    document.getElementById("count").innerHTML=counter--;
}