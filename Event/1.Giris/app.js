


//2 yol
//onsubmit kaldırdık
const drinkform=document.getElementById("drinkform")
//bir olay varsa tetikle
drinkform.addEventListener("submit",submitForm)



//forma id=drinkfrom ekledik
// froma ekledik   onsubmit="submitForm(event)"
// //1 yol
 function submitForm(e)
 {
   console.log(e.target)
  console.log('form submitted')
    //refresh olmasını engellemek istiyorsak
    e.preventDefault()
 }