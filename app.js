let btn = document.querySelector(".increase1");
let h1 = document.querySelector(".h1-number");
let count = 0;
btn.addEventListener("click", ()=>{
    count++
    h1.innerHTML = count
 
})

let btn2 = document.querySelector(".decrease-1");
btn2.addEventListener("click", ()=>{
    count--
    h1.innerHTML = count
})

let btnIncrease5 = document.querySelector(".increase5");
btnIncrease5.addEventListener("click", ()=>{
    count+=5
    h1.innerHTML = count
    
})
let btnDecrease5 = document.querySelector(".decrease5");
btnDecrease5.addEventListener("click", ()=>{
    count-=5
    h1.innerHTML = count
    
})

let colorful = document.querySelector(".color")

colorful.addEventListener("click" , ()=>{
    let color1 = Math.floor(Math.random()*255)
    let color2 = Math.floor(Math.random()*255)
    let color3 = Math.floor(Math.random()*255)
    h1.innerHTML = count
    h1.style.color = `rgb(${color1}, ${color2}, ${color3})`;
    
    
})

let fontIncrease = document.querySelector(".size-increase")

fontIncrease.addEventListener("click",()=>{
    let currentFontSize = window.getComputedStyle(h1).fontSize;
    let fontSize = parseFloat(currentFontSize);
    h1.style.fontSize = fontSize;
    fontSize++;
    console.log(fontSize);
})
let fontDecrease = document.querySelector(".size-decrease")

fontDecrease.addEventListener("click",()=>{
    let currentFontSize = window.getComputedStyle(h1).fontSize;
    let fontSize = parseFloat(currentFontSize);
    h1.style.fontSize = fontSize;
    fontSize--;
    console.log(fontSize);
})