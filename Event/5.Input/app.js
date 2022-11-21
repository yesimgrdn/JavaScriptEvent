inputdrink=document.getElementById("ad")
inputdrink.addEventListener("focus",log)
//blur :Bir kullanıcı bir giriş 
//alanından ayrıldığında bir JavaScript yürütün:
inputdrink.addEventListener("blur",log)
inputdrink.addEventListener("paste",log)
inputdrink.addEventListener("copy",log)
inputdrink.addEventListener("cut",log)
inputdrink.addEventListener("select",log)

function log(e)
{
    console.log(e.type)

}