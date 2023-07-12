var list=[];
function add(){
if(!document.getElementById("tb").value == ""){
list.push(document.getElementById("tb").value);
document.getElementById("tb").value = "";
print();
}
}

function print(){
    document.getElementById("taskhead").hidden=false;
    document.getElementById("tasks").innerHTML+="<input class='chk' type='checkbox'> <label>"+list[0]+"</label><br>";
    list.pop();




}