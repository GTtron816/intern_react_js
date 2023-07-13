var list=[];
const a=function(){
if(!document.getElementById("tb").value.trim() == ""){
list.push(document.getElementById("tb").value.trim());
document.getElementById("tb").value = "";
p();
}
}

const p=()=>{
    document.getElementById("taskhead").hidden=false;
    var div=document.createElement("div");
    div.id=list[0];
    var chk=document.createElement("input");
    chk.type="checkbox"
    chk.className="chk"
    chk.value=list[0];
    var span=document.createElement("span");
    span.innerHTML=list[0];
    span.className="label";
    var btn=document.createElement("button");
    btn.textContent="Remove";
    btn.className="btr";
    var space=document.createElement("br");
    chk.onclick=function(){
        span.style.setProperty("text-decoration", "line-through");
    };
    btn.onclick=function(){
      div.remove();

    };

    var parent=document.getElementById("tasks");
    parent.appendChild(div);
    div.appendChild(chk);
    div.appendChild(span);
    div.appendChild(btn);
    list.pop();
}

