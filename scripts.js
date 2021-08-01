let count = 1;

function render(){
    let element = document.getElementById('pokemon-image');
    element.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg" >`
}


let previous = document.getElementById('previous-btn');
let next = document.getElementById('next-btn');

previous.onclick = function() {
    if (count > 1){
        count--;
        render();
    }
}

next.onclick = function() {
    if (count < 650) {
        count++;
        render();
    }
}

render();