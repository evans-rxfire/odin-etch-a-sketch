const gridContainer = document.querySelector("#grid-container");
const button = document.querySelector("button");

function generateGrid(playerInput) {
    gridContainer.innerHTML = "";

    for (i = 0; i < playerInput; i++) {
        const row = document.createElement("div");
        row.classList.add("grid-row");
        gridContainer.appendChild(row);

        for (j = 0; j < playerInput; j++) {
            const square = document.createElement("div");
            square.classList.add("grid");
        
            square.style.width = `${800 / playerInput}px`;
            square.style.height = `${800 / playerInput}px`;

            row.appendChild(square);
        }
    }
}

generateGrid(16);


button.addEventListener("click", () => {
    let playerInput = 16;

    while (true) {
        let userInput = prompt("Enter a number between 1 and 100", playerInput);

        if (userInput === null) {
            break;
        }
        
        let num = Number(userInput);

        if(!isNaN(num) && num >= 1 && num <= 100) {
            playerInput = num;
            break;
        } 
        else {
            alert("Invalid input! Please enter a number between 1 and 100.");
        }
    }
    generateGrid(playerInput);
});



document.querySelector("#grid-container").addEventListener("mouseover", function (event) {
    if (event.target.classList.contains("grid")) {
        event.target.style.backgroundColor = "midnightblue";
    }
});

/*document.querySelector("#grid-container").addEventListener("mouseout", function (event) {
    if (event.target.classList.contains("grid")) {
        event.target.style.backgroundColor = ""; // Reset to default
    }
});*/