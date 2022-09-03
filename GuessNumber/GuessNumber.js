
let main = document.getElementById("main-div");
let html =  ` <label for="exampleInputEmail1" class="form-label"></label>
<input type="text" class="form-control" id="inputnum" placeholder="Please Enter a Name">
</div>
<p class="cont-text cont-title" id = "textarea" style = "font-size : 2rem">Please Enter Your Name </p>
<div class="btn-dv">
<button id="btn">Continue</button>`
main.innerHTML= html;


let btn1 = document.getElementById("btn");

btn1.addEventListener("click",()=>{
  let n = document.getElementById("inputnum")
  let name  = n.value;
  let num = Math.floor((Math.random()*30)+1)
  console.log(num)
  let maindiv = document.getElementById("main-div")
  let newhtml =  ` <label for="exampleInputEmail1" class="form-label"></label>
<input type="number" class="form-control" id="inputnum" placeholder="Please Enter a number">
</div>
<p class="cont-text cont-title" id = "textarea">Please Enter a Number Between 1-30 You have 3 chances to guess the hidden
Number. If you enter the right number you gonna win 10 rupees otherwise you loose your money</p>
<div class="btn-dv">
<button id="btn2">Tap To Guess</button>`
maindiv.innerHTML = newhtml


let chances  = 0;
let trys = ()=>{
  let btn2 = document.getElementById("btn2")
   btn2.addEventListener('click',()=>{

     
     let input = document.getElementById("inputnum")
    let inputnum = input.value;
    inputnum = Number.parseInt(inputnum)
    if(inputnum !=0){
      chances  = chances + 1;
    }
     if(inputnum == num){
       maindiv.innerHTML =       
       
 `<p class="cont-text cont-title" id = "textarea">&#x1F38A  &#x1F389 congratulations ${name} you enter a correct number &#x1F389  &#x1F38A <br> The Hidden Number Is: ${num} <br> "Press F5 to Play Again"</p>
 <div class="btn-dv">`
 
 }
    else if(chances == 3){
     maindiv.innerHTML = 
    `<p class="cont-text cont-title" id = "textarea">Sorry ${name} Out of Chances <br> The Hidden Number Is : "${num}" <br> "Press F5 to Play Again" </p>
    <div class="btn-dv">
    `
  }


else if(inputnum > 30 || inputnum < 1){
  maindiv.innerHTML = 
  
  ` <label for="exampleInputEmail1" class="form-label"></label>
<input type="number" class="form-control" id="inputnum" placeholder="Please Enter a number">
</div>
<p class="cont-text cont-title" id = "textarea">Sorry ${name} you enter a wrong number you have to enter a number between 1-30  you loose a chance remaning chance ${3 - chances} out of 3</p>
<div class="btn-dv">
<button id="btn2">Try Again</button>`  
trys()
}



else if(inputnum > num){
  maindiv.innerHTML = 
  ` <label for="exampleInputEmail1" class="form-label"></label>
<input type="number" class="form-control" id="inputnum" placeholder="Please Enter a number">
</div>
<p class="cont-text cont-title" id = "textarea">Sorry ${name} you enter a wrong number your number is grater then the hidden number remaning chances ${3-chances} out of 3</p> 
<div class="btn-dv">
<button id="btn2">Try Again</button>`
trys()

}
else if(inputnum < num){
  maindiv.innerHTML = ` <label for="exampleInputEmail1" class="form-label"></label>
  <input type="number" class="form-control" id="inputnum" placeholder="Please Enter a number">
  </div>
  <p class="cont-text cont-title" id = "textarea">Sorry ${name} you enter a wrong number your number is less then the hidden number remaning chances ${3-chances} out of 3</p> 
  <div class="btn-dv">
  <button id="btn2">Try Again</button>`
trys()

}

else{
  maindiv.innerHTML = 
  ` <label for="exampleInputEmail1" class="form-label"></label>
<input type="number" class="form-control" id="inputnum" placeholder="Please Enter a number">
</div>
<p class="cont-text cont-title" id = "textarea">oops! ${name} you enter a wrong input remaning chances ${3-chances} out of 3 </p> 
<div class="btn-dv">
<button id="btn2">Try Again</button>`
trys()
}

})
}
trys()
})
  



