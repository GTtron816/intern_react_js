var list=[];
var id=0;
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
    div.value=list[0];
    div.className="list";
    var chk=document.createElement("input");
    chk.type="checkbox"
    chk.className="chk"
    chk.value=list[0];
    chk.id=list[0]
    var span=document.createElement("span");
    span.innerHTML=list[0];
    span.className="label";
    var btn=document.createElement("button");
    btn.textContent="Remove";
    btn.className="btr";
    chk.onclick=function(){
        span.style.setProperty("text-decoration", "line-through");
        progree()
    };
    btn.onclick=function(){
      div.remove();
      progree()

    };

    var parent=document.getElementById("tasks");
    parent.appendChild(div);
    div.appendChild(chk);
    div.appendChild(span);
    div.appendChild(btn);
    list.pop();
}


function search() {
    var  txtValue;
    var input = document.getElementById('sc');
    var filter = input.value.toUpperCase();
    const items= document.querySelectorAll('.list');
    items.forEach((el)=>{
        txtValue=el.value;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            el.style.display = "";
        } else {
            el.style.display = "none";
        }
    });

   
    
 
  }

  function progree(){
    const items= document.querySelectorAll('.chk');
    var completed=0;
    var incomp=0;
    var count=0;
    var cm=document.getElementById("cm");
    var ic=document.getElementById("ic");
    items.forEach((el)=>{
        if (el.checked == true){
            completed=completed+1;
        }
        else{
            incomp=incomp+1;
        }
        count=count+1;


    });
   
    cmp=((completed)/count*100).toFixed(2);
    icp=((incomp)/count*100).toFixed(2);
    cm.style.width=cmp+"%";
    cm.innerHTML=cmp+"%";
    ic.style.width=icp+"%";
    ic.innerHTML=icp+"%";
    if(isNaN(cmp)){
        cm.style.width="0%";
        cm.innerHTML="0%";
        ic.style.width="0%";
        ic.innerHTML="0%";

    }

 
        

    
  }


