var el=document.getElementById("ad")

//document.addEventListener("dblclick",log)
//document.addEventListener("click",log)
el.addEventListener("mousedown",log)
// document.addEventListener("mouseup",log)
// document.addEventListener("mouseover",log)
// document.addEventListener("mouseout",log)
// document.addEventListener("mouseenter",log)
// document.addEventListener("mouseleave",log)
function log(e)
{
    console.log(e.type)
}