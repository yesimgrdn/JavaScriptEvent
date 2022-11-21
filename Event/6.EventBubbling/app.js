//     <h3 id="entryhead">Giriş</h3> bunu ekledik
//<div class="row"> bu var
document.getElementById("entryhead").addEventListener("click",function(e)
{
    console.log("H3 Entry")
})
document.querySelector(".row").addEventListener("click",function(e)
{
    console.log("row")
})
document.querySelector(".container").addEventListener("click",function(e)
{
    console.log("container")
})
