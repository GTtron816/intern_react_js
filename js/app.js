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
    var chk=document.createElement("input")
    chk.type="checkbox"
    chk.id="chk";
    chk.className="chk"
    var span=document.createElement("span");
    span.innerHTML=list[0];
    span.id="span";
    span.className="label";
    var btn=document.createElement("button");
    btn.textContent="Remove";
    btn.className="btr";
    var space=document.createElement("br");
    chk.onclick=function(){
        span.style.setProperty("text-decoration", "line-through");
    };
    btn.onclick=function(){
        chk.remove();
        span.remove();
        btn.remove();
        space.remove();

    };

    var parent=document.getElementById("tasks");
    parent.appendChild(chk);
    parent.appendChild(span);
    parent.appendChild(btn);
    parent.appendChild(space);
    list.pop();
}

