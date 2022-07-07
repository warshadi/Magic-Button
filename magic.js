let button = document.getElementById('btn');

button.addEventListener("mouseover", magic);


function magic() {
    button.style.position = "absolute";
    button.style.top = `${Math.floor(Math.random() * 400)}px`;
    button.style.left = `${Math.floor(Math.random() * 400)}px`;
}


