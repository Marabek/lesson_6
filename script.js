const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const reset = document.getElementById('reset');

let state = 0;

function render() {
    counter.textContent = state.toString();
}

addBtn.addEventListener('click', () => {
    state++;
    render();
})

subBtn.addEventListener('click', () => {
    state--;
    render();
})

reset.addEventListener('click', () => {
    state = 0;
    render();
})
render();