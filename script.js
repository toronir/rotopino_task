//function that increse or decrease items nubers
function plusOne(cou,num) {
    num++;
    cou.textContent = num.toString();
    return num;
}
function minusOne(cou,num) {
    if (num > 0) {
        num--;
        cou.textContent = num.toString();
        
    }
    return num;
}

//functions call by "AddEventListener" 
let number1 = 1;
let count1 = document.getElementById('count1');
let incrementor1 = document.getElementById('increaseNumber1');
let decrease1 = document.getElementById('decreaseNumber1');
incrementor1.addEventListener('click', function onClick() {
    number1 = plusOne(count1,number1);
});
decrease1.addEventListener('click', function onClick() {
    number1 = minusOne(count1,number1);
});

let number2 = 1;
let count2 = document.getElementById('count2');
let incrementor2 = document.getElementById('increaseNumber2');
let decrease2 = document.getElementById('decreaseNumber2');
incrementor2.addEventListener('click', function onClick() {
    number2 = plusOne(count2,number2);
});
decrease2.addEventListener('click', function onClick() {
    number2 = minusOne(count2,number2);
});

let number3 = 1;
let count3 = document.getElementById('count3');
let incrementor3 = document.getElementById('increaseNumber3');
let decrease3 = document.getElementById('decreaseNumber3');
incrementor3.addEventListener('click', function onClick() {
    number3 = plusOne(count3,number3);
});
decrease3.addEventListener('click', function onClick() {
    number3 = minusOne(count3,number3);
});
let number4 = 1;
let count4 = document.getElementById('count4');
let incrementor4 = document.getElementById('increaseNumber4');
let decrease4 = document.getElementById('decreaseNumber4');
incrementor4.addEventListener('click', function onClick() {
    number4 = plusOne(count4,number4);
});
decrease4.addEventListener('click', function onClick() {
    number4 = minusOne(count4,number4);
});

let number5 = 1;
let count5 = document.getElementById('count5');
let incrementor5 = document.getElementById('increaseNumber5');
let decrease5 = document.getElementById('decreaseNumber5');
incrementor5.addEventListener('click', function onClick() {
    number5 = plusOne(count5,number5);
});
decrease5.addEventListener('click', function onClick() {
    number5 = minusOne(count5,number5);
});

let number6 = 1;
let count6 = document.getElementById('count6');
let incrementor6 = document.getElementById('increaseNumber6');
let decrease6 = document.getElementById('decreaseNumber6');
incrementor6.addEventListener('click', function onClick() {
    number6 = plusOne(count6,number6);
});
decrease6.addEventListener('click', function onClick() {
    number6 = minusOne(count6,number6);
});

