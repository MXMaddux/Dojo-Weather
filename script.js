
var i = 0;

var b = document.getElementsByClassName("high-temp")[i].innerText;

function announcement() {
    alert("City Clicked.")
}

function erase_text() {
    document.getElementById('cookie-text').style.visibility='hidden';
    document.getElementById('cookie-text-2').style.visibility='hidden';
    
}


function convert_temp(element) {
    for(i = 0; i < 4; i++) {
        if(element.value  === "fahrenheit"){
            var x = document.getElementsByClassName("high-temp")[i].innerText;
            x = Math.floor((x * 9/5) + 32);
            document.querySelectorAll(".high-temp")[i].innerHTML = x;
            // console.log(x)
            var z = document.querySelectorAll(".low-temp")[i].innerText;
            z = Math.floor((z * 9/5) + 32);
            document.querySelectorAll(".low-temp")[i].innerHTML = z;
            // console.log(z)
            
            }
        else if (element.value  === "celcius"){
            var y = document.getElementsByClassName("high-temp")[i].innerText;
            y = Math.round((y - 32) * 5/9);
            document.querySelectorAll(".high-temp")[i].innerHTML = y;
            // console.log(y)
            var a = document.getElementsByClassName("low-temp")[i].innerText;
            a = Math.round((a - 32) * 5/9);
            document.querySelectorAll(".low-temp")[i].innerHTML = a;
            // console.log(a)
            
        }
    }
    
}


