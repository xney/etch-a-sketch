function populateGrid(size) {
    let grid = document.querySelector("#grid");
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild)
    }
    let totalSize = size * size;
    let divSize = Math.floor(960 / size)
    for (let i = 0; i < totalSize; i++) {
        const div = document.createElement("div");
        div.classList.add("gridMember");
        div.setAttribute("style", "height: " + divSize.toString() +"px; width: " + divSize.toString() +"px;")
        grid.appendChild(div);
    }

    function updateGridMember(gridMember) {
        gridMember.classList.add("hovered");
    }

    const gridMembers = document.querySelectorAll(".gridMember");
    gridMembers.forEach((gridMember) => {
    gridMember.addEventListener("mouseover", () => {
        updateGridMember(gridMember);
        })
    })

}

const gridSizeButton = document.querySelector("#gridSize")
gridSizeButton.addEventListener("click", () => {
    let gridSize = parseInt(prompt("Enter the size you want each side of the grid to be"));
    populateGrid(gridSize);
})


