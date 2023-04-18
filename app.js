let res=document.getElementById("output");

function Calculate(){
    try{
        res.value=eval(res.value)
    }
    catch(err){
        alert("Invalid Input")  
    }
}
function Clear(){
    res.value=""
}
function Del(){
    res.value=res.value.slice(0,-1)
}
function display(val){
    res.value+=val
}