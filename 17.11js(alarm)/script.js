const start = document.querySelector(".start");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const hourNum = document.querySelector(".hnum");
const minNum = document.querySelector(".mnum");
const secNum = document.querySelector(".snum");


let counter;





start.addEventListener("click", function(){
    let hourCount = +hour.value;
    let minCount = +minute.value;
    let secCount = +second.value;
    hourNum.textContent = hourCount;
    minNum.textContent = minCount;
    secNum.textContent = secCount;



    this.setAttribute("disabled", true)
    let counterHour = setInterval(()=>{
        if(hourCount >= 0 && hourCount <24){
            hourCount--
            hourNum.textContent = hourCount;
    
            if (hourCount===0) {
    
                clearInterval(counterHour)
                
            }


        }
        else{
            alert("duzgun saat daxil edin!")
        }


    }, 3600000)
    let countermin = setInterval(()=>{
        if(minCount >= 0 && minCount <60){
            minCount--

            minNum.textContent = minCount;
    
            if (minCount===0) {
    
                clearInterval(countermin)
                
            }


        }
        else{
            alert("duzgun deqiqe daxil edin!")
        }


    }, 60000)
    let counterSec = setInterval(()=>{

        if(hourCount >= 0 && hourCount <60){
            secCount--

            secNum.textContent = secCount;
    
            if (secCount===0) {
    
                clearInterval(counterSec)
                
            }


        }
        else{
            alert("duzgun saniye daxil edin!")
        }


    }, 1000)


    
    
})