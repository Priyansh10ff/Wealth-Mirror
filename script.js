const calBtn = document.querySelector("#calculate-btn");
const resetBtn = document.querySelector("#reset-btn");
const wage = document.querySelector("#wage");
const years = document.querySelector("#years");
const price = document.querySelector("#price");

calBtn.addEventListener("click" , function(){
    let w = parseFloat(wage.value);
    let y = parseFloat(years.value);
    let p = parseFloat(price.value);
    calculateHours(w,p);
    calculateWealth();
})

resetBtn.addEventListener("click" , function(){
    wage.value = "";
    years.value = "";
    price.value = "";
    console.clear();
})

function calculateHours(p,w){
    let hours = p/w;
    console.log(hours);
    return hours;
}

function calculateWealth(){
    
}
