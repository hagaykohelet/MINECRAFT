const head = document.getElementById("header")

for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 50; j++) {
        const skyCube = document.createElement("div")
        skyCube.classList = "sky"
        head.appendChild(skyCube)
    }
}



