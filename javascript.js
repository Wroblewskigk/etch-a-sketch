let gridContainer = document.getElementById("grid-container");
for (let i = 0; i < 16; i++) {
    gridContainer.innerHTML += "<div class='column'></div>";
}

let columns = document.getElementsByClassName('column');
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        columns[i].innerHTML += "<div class='field'></div>";
    }
}

let fields = document.getElementById('grid-container');
fields.addEventListener('mouseover', (event)=>{
    if(event.target.classList.contains('field')){
        event.target.style = "background-color: orange;";
    }
});