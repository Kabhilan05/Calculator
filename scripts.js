function calculate(){
    var p=document.getElementById("result").value;
    var q = eval(p)
    document.getElementById("result").value=q;
}
function display1(value){
    document.getElementById("result").value+=value;
}
function clearscreen(){
    document.getElementById("result").value="";
}