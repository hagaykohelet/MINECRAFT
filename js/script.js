const head = document.getElementById("header")
let cursor = null;
for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 50; j++) {
        const cube = document.createElement("div")
        cube.classList = "sky"

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
        else if (i === 8 && ((j > 1 && j <= 7) || (j > 9 && j < 16) || (j > 37 && j < 43))) {
            cube.classList = "branch"
        }
        cube.addEventListener("click", () => {
            if (cursor === "axe" && (cube.className === "tree" || cube.className === "branch")) {
                cube.classList = "sky"
            }
            if (cursor === "shovel" && (cube.className === "grass" || cube.className === "ground")) {
                cube.classList = "sky"
            }
            if (cursor === "pickaxe" && cube.className === "block") {
                cube.classList = "sky"
            }
        })

        head.appendChild(cube)
    }
}



function changeCursor(tool) {
    if (tool.id === "axe") {
        cursor = "axe"
        document.body.style.cursor = 'url("../images_cursor/ax.ico"), auto'
    }
    if (tool.id === "shovel") {
        cursor = "shovel"
        document.body.style.cursor = 'url("../images_cursor/shovel.ico"), auto'
    }
    if (tool.id === "pickaxe") {
        cursor = "pickaxe"
        document.body.style.cursor = 'url("../images_cursor/pickaxe.ico"), auto'

    }
    if (tool.id === "sword") {
        cursor = "sword"
        document.body.style.cursor = 'url("../images_cursor/sword_cursor.ico"), auto'
    }
}


