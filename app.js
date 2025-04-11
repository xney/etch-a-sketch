function populateGrid(size) {
    const grid = document.querySelector("#grid")
    for (let i = 0; i < size; i++) {
        const div = document.createElement("div")
        div.classList.add("gridMember")
        grid.appendChild(div)
    }
}

populateGrid(16)

function updateGridMember(gridMember) {
    gridMember.classList.add("hovered")
}

const gridMembers = document.querySelectorAll(".gridMember");
gridMembers.forEach((gridMember) => {
    gridMember.addEventListener("mouseover", () => {
        updateGridMember(gridMember)
    })
})

