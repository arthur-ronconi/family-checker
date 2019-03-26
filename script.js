const input = document.getElementById('input');
const button = document.getElementById('button');
const bg = document.getElementById('bg');
const text = document.getElementById('text');
const family = ['arthur', 'joao', 'ednalva', 'adalto', 'amanda']
let paragraph = document.getElementById('remaining');
let span = document.getElementById('count');

span.textContent = 5;

function fillBG(color){
    bg.style.backgroundColor = color;
    text.style.color = 'white';
    paragraph.style.color = 'white';
}

button.onclick = function (){
    if(family.includes(input.value)){
        fillBG('#348fff');
        span.textContent--;
        var pos = family.indexOf(input.value);
        family.splice(pos,1);
        input.value = '';
    } else {
        fillBG('#ff3549');
        input.value = '';
    }
    if(span.textContent < 1){
        fillBG('#33ff70');
        paragraph.textContent = 'WELL DONE!';
        input.toggleAttribute('disabled');
        input.value = 'refresh to restart';
        button.toggleAttribute('disabled');
    }
}