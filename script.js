var overlay=document.querySelector(".popupoverlay")
var box=document.querySelector(".popup-box")
var addi=document.querySelector(".add")

addi.addEventListener("click",function(){
    overlay.style.display="block"
    box.style.display="block"
})


overlay.addEventListener("click", function () {
    overlay.style.display = "none";
    box.style.display = "none";
});


var container=document.querySelector(".contain")
var addoc=document.querySelector("#addoc")
var title=document.querySelector("#titleinp")
var author=document.querySelector("#author")
var desc=document.querySelector("#desc")

function can(event){
    event.preventDefault()
    overlay.style.display="none"
    box.style.display="none"
}


addoc.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-contain")
    div.innerHTML=`<h2>${title.value}</h2>
                <h5>${author.value}</h5>
                <p>${desc.value}</p>
                <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    box.style.display="none"
})


function deletebook(event){
    event.target.parentElement.remove()
}
