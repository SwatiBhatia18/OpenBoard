let note = document.querySelector("#sticky");
note.addEventListener("click",function(){
    let sticky = document.createElement("div");
    sticky.setAttribute("class","sticky");
    sticky.innerHTML = `<div class="navbar">
    <i class="fas fa-window-minimize mini cbutton "></i>
    <i class="fas fa-times close cbutton"></i>
    </div>
    <textarea name="" class="textarea"></textarea>`
body.appendChild(sticky);
let minimize = sticky.querySelector(".fa-window-minimize");
let close = sticky.querySelector(".fa-times");
let textArea = sticky.querySelector("textarea");
let isClosed = false;
minimize.addEventListener("click",function(e){
    if(isClosed == false)
    {
        textArea.style.display = "none";
        sticky.style.border = "none;"
    }
    else
    {
        textArea.style.display = "block";
    }
    isClosed = !isClosed;
                //console.log("close");
    })
    close.addEventListener("click",function(){
         sticky.remove();
    })

})