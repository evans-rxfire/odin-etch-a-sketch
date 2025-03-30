const gridContainer = document.querySelector("#grid-container");

for (i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");
    gridContainer.appendChild(row);

    for (j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("grid");
        row.appendChild(square); 
    };
}

//set up "hover" effect so square.sytle.backgroundColor changes when mouse passes over square
// "hovering" == when mouse enters a div and ends when mouse leaves

document.querySelector("#grid-container").addEventListener("mouseover", function (event) {
    if (event.target.classList.contains("grid")) {
        event.target.style.backgroundColor = "midnightblue";
    }
});

// To do list:
// create eventListener that generates a prompt when button clicked
// take the value entered into the prompt == numberEntered
// remove old grid
// create a grid with numberEntered sqares per side
// adjust the width/height of square to take up all space in grid-container





/*document.querySelector("#grid-container").addEventListener("mouseout", function (event) {
    if (event.target.classList.contains("grid")) {
        event.target.style.backgroundColor = ""; // Reset to default
    }
});*/