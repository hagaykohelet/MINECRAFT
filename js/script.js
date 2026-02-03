const head = document.getElementById("header")

for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 50; j++) {
        const cube = document.createElement("div")
        cube.classList = "sky"
        cube.addEventListener("click", () => {
            cube.classList = "sky"
        })
        if (i > 20) {
            cube.classList = "block"
        }

        else if (i === 15) {
            cube.classList = "grass"
        }
        else if ((i <= 14 && i > 8) && ((j > 3 && j <= 5) || (j > 11 && j < 14) || j === 40)) {
            cube.classList = "tree"
        }

        else if (i > 15) {
            cube.classList = "ground"
        }
        else if(i === 8 && ((j > 1 && j <=7) || (j > 9 && j < 16) || (j > 37 && j < 43))){
            cube.classList = "branch"            
        }
        head.appendChild(cube)
    }
}

