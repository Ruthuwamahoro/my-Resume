const answer = document.getElementById('value');
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');

let counter = 3

div1.addEventListener('click',decreaseValue);
div2.addEventListener('click',resetValue);
div3.addEventListener('click',increaseValue);


function resetValue(){
    counter = 3;
    answer.textContent = counter;
}
function increaseValue(){
    counter +=1;
    answer.textContent = counter;
}
function decreaseValue(){
    counter -= 1;
    answer.textContent = counter;
}