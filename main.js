var array = ["#FFFFFF", "#C0C0C0", "#808080", "#000000", "#FF0000	", "#800000",
    "#00FF00", "#008000", "#008080", "#000080", "#FF00FF", "#800080"];

let color=document.getElementById("color-fliper");
let backgroundcolors=document.getElementById("backgroundcolor");
let colorBtn=document.getElementById("color-btn");
console.log(color);
colorBtn.addEventListener('click', changeColor);
function changeColor(){
    console.log("click");
    let randomColors=Math.floor(Math.random()*array.length);
    let colors=array[randomColors];
    backgroundcolors.textContent=`Current Background Color: ${colors}`
    document.body.style.backgroundColor=colors;
    console.log(backgroundcolors);
}


