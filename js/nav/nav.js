const links= document.querySelectorAll('li a');
links.forEach((el)=>{ {
       el.addEventListener('click', function(event) {
            event.preventDefault();
            links.forEach((a)=>{
                a.classList.remove("active");
            });
            var id=document.getElementById(this.id)
            id.classList.add("active");
            var section=id.getAttribute('href');
            var goto=document.getElementById(section)
            
            if (goto == null){
                window.location.assign(section);
            }
            else{
                goto.scrollIntoView({
                    behavior: "smooth"
                });
            }
    });
}})


