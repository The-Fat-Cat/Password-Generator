let button = document.getElementById("button")
let randomNumber = document.getElementById("firstBox")

button.addEventListener("mouseover", function(){
    button.classList.toggle('buttonOver')
})

button.addEventListener("mouseleave",function(){
    button.classList.toggle('buttonOver')
})

button.addEventListener("mousedown", function(){
   let rand = Math.floor(Math.random()*5) + 1;
   console.log(rand)
   randomNumber.textContent = rand;
})