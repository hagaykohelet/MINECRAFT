const head = document.getElementById("header")
let cursor = null;
const box = document.getElementById("box")
const inventory = document.getElementById("inventory")
let openBox = false;
let boxContent = {
    block: 0,
    grass: 0,
    tree: 0,
    ground: 0,
    branch: 0
}
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
                if (cube.className === "tree") {
                    boxContent.tree += 1
                    if (boxContent.tree === 1) {
                        const content = document.createElement("button")
                        content.addEventListener("click", changeCursorImage)
                        content.className = "treeInventory"
                        content.style.backgroundImage = "url('../images/tree.png')"
                        inventory.appendChild(content)
                    }
                    if (boxContent.tree >= 1) {
                        const tree = document.querySelector(".treeInventory")
                        tree.innerHTML = boxContent.tree
                    }
                }
                if (cube.className === "branch") {
                    boxContent.branch += 1
                    if (boxContent.branch === 1) {
                        const content = document.createElement("button")
                        content.addEventListener("click", changeCursorImage)
                        content.className = "branchInventory"
                        content.style.backgroundImage = "url('../images/branch.png')"
                        inventory.appendChild(content)
                    }
                    if (boxContent.branch >= 1) {
                        const branch = document.querySelector(".branchInventory")
                        branch.innerHTML = boxContent.branch
                    }
                }
                cube.classList = "sky"
            }
            if (cursor === "shovel" && (cube.className === "grass" || cube.className === "ground")) {
                if (cube.className === "grass") {
                    boxContent.grass += 1
                    if (boxContent.grass === 1) {
                        const content = document.createElement("button")
                        content.addEventListener("click", changeCursorImage)
                        content.className = "grassInventory"
                        content.style.backgroundImage = "url('../images/grass.png')"
                        inventory.appendChild(content)
                    }
                    if (boxContent.grass >= 1) {
                        const grass = document.querySelector(".grassInventory")
                        grass.innerHTML = boxContent.grass
                    }
                }
                if (cube.className === "ground") {
                    boxContent.ground += 1
                    if (boxContent.ground === 1) {
                        const content = document.createElement("button")
                        content.addEventListener("click", changeCursorImage)
                        content.className = "groundInventory"
                        content.style.backgroundImage = "url('../images/ground.png')"
                        inventory.appendChild(content)
                    }
                    if (boxContent.ground >= 1) {
                        const ground = document.querySelector(".groundInventory")
                        ground.innerHTML = boxContent.ground
                    }
                }

                cube.classList = "sky"
            }

            if (cursor === "pickaxe" && cube.className === "block") {
                if (cube.className === "block") {
                    boxContent.block += 1
                    if (boxContent.block === 1) {
                        const content = document.createElement("button")
                        content.addEventListener("click", changeCursorImage)
                        content.className = "blockInventory"
                        content.style.backgroundImage = "url('../images/block.jpg')"
                        inventory.appendChild(content)
                    }
                    if (boxContent.block >= 1) {
                        const block = document.querySelector(".blockInventory")
                        block.innerHTML = boxContent.block
                    }
                }
                cube.classList = "sky"
            }
            if (cursor === "tree" && cube.className === "sky") {
                if (boxContent.tree > 0) {
                    boxContent.tree -= 1
                    cube.classList = "tree"
                    const tree = document.querySelector(".treeInventory")
                    tree.innerHTML = boxContent.tree
                }
                if (boxContent.tree === 0) {
                    const tree = document.querySelector(".treeInventory")
                    tree.remove()
                    document.body.style.cursor = "auto"
                }
            }
            if (cursor === "branch" && cube.className === "sky") {
                if (boxContent.branch >= 1) {
                    boxContent.branch -= 1
                    cube.classList = "branch"
                    const branch = document.querySelector(".branchInventory")
                    branch.innerHTML = boxContent.branch
                }
                if (boxContent.branch === 0) {
                    const branch = document.querySelector(".branchInventory")
                    branch.remove()
                    document.body.style.cursor = "auto"
                }
            }
            if (cursor === "grass" && cube.className === "sky") {
                if (boxContent.grass >= 1) {
                    boxContent.grass -= 1
                    cube.classList = "grass"
                    const grass = document.querySelector(".grassInventory")
                    grass.innerHTML = boxContent.grass
                }
                if (boxContent.grass === 0) {
                    const grass = document.querySelector(".grassInventory")
                    grass.remove()
                    document.body.style.cursor = "auto"
                }
            }
            if (cursor === "ground" && cube.className === "sky") {
                if (boxContent.ground >= 1) {
                    boxContent.ground -= 1
                    cube.classList = "ground"
                    const ground = document.querySelector(".groundInventory")
                    ground.innerHTML = boxContent.ground
                }
                if (boxContent.ground === 0) {
                    const ground = document.querySelector(".groundInventory")
                    ground.remove()
                    document.body.style.cursor = "auto"
                }
            }
            if (cursor === "block" && cube.className === "sky") {
                if (boxContent.block >= 1) {
                    boxContent.block -= 1
                    cube.classList = "block"
                    const block = document.querySelector(".blockInventory")
                    block.innerHTML = boxContent.block

                }
                if (boxContent.block === 0) {
                    const block = document.querySelector(".blockInventory")
                    block.remove()
                    document.body.style.cursor = "auto"
                }
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


box.addEventListener("click", () => {
    // if (boxContent.block === 0 && boxContent.grass === 0 && boxContent.tree === 0 && boxContent.ground === 0 && boxContent.branch === 0) {

    // }
    if (!openBox) {
        inventory.style.display = "flex"
        inventory.style.flexWrap = "wrap"
        openBox = true;
    }
    else {
        inventory.style.display = "none"
        openBox = false
    }
})


function changeCursorImage(block) {
    if (block.currentTarget.classList.contains("treeInventory")) {
        document.body.style.cursor = "url('../images/tree.png') 8 8 , auto"
        cursor = "tree"
    }
    if (block.currentTarget.classList.contains("branchInventory")) {
        document.body.style.cursor = "url('../images/branch.png') 8 8, auto"
        cursor = "branch"
    }
    if (block.currentTarget.classList.contains("grassInventory")) {
        document.body.style.cursor = "url('../images/grass.png') 8 8 ,auto"
        cursor = "grass"
    }
    if (block.currentTarget.classList.contains("groundInventory")) {
        document.body.style.cursor = "url('../images/ground.png') 8 8 ,auto"
        cursor = "ground"
    }
    if (block.currentTarget.classList.contains("blockInventory")) {
        document.body.style.cursor = "url('../images/block.jpg') 8 8 ,auto"
        cursor = "block"
    }
}