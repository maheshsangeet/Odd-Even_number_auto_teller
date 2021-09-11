const inputBox = document.getElementById("input");
const resultBox = document.getElementById("show");
        
function checkNumber(){

    let inputNumber=inputBox.value;
    let result;
    if (isNaN(inputNumber) == true) {
        result='Given is not a number <br>Type number';
    }else if (inputNumber == '') {
        result = '';
    }else if (inputNumber%2 == 0) {
        result='Even Number';
    }else{
        result='Odd Number';
    }
resultBox.innerHTML = result;
}


setInterval(checkNumber,3000)




// document.getElementById('submit').addEventListener('click',checkNumber); 