// const mainContainer = document.getElementById("mainContainer");
//STYLE CODES

const biomeImg = document.querySelector("#biome-gallery")
const biomeDiv = document.createElement("div")
const biomes = document.querySelector(".biomes")
const mainImg = document.querySelector(".detail-image")
 

async function biomeList() {        // listing the biomes
    const response = await fetch("http://localhost:3000/biomes")
    const biomes = await response.json()
    console.log(biomes)

    biomes.forEach(biome => {
        const biomeList = document.querySelector("#biome-list")
        const biomeImg = document.createElement("img")
        biomeImg.src = biome.image
        biomeList.appendChild(biomeImg)     // appending pictures into biome list

        biomeImg.addEventListener("click", () => handleClickOnBiome(biome))     // click on pic for details
    })
}

function handleClickOnBiome(biome) {
    console.log(biome) // change the src for the main image to biome image

    const mainImg = document.querySelector(".detail-image")
    mainImg.src = biome.image       // set main img to click biome's image

    const biomeName = document.querySelector(".name")
    biomeName.textContent = biome.name

    const biomeDes = document.querySelector(".description")
    biomeDes.textContent = biome.description

    const biomeFeatures = document.querySelector(".features")
    biomeFeatures.textContent = biome.features

    const biomeBlocks = document.querySelector(".blocks")
    biomeBlocks.textContent = biome.blocks
}

biomeList()

//     COMMENT BUTTON   //

function addComment() {
    console.log("comment")
    const commentInputValue = document.getElementById("comment-input").value

    // commentInputValue.addEventListener("submit", () => { 
    if (commentInputValue) {
        const commentSection = document.querySelector(".comments-section")
        const commentDiv = document.createElement("div")
        commentDiv.textContent = commentInputValue
        commentSection.appendChild(commentDiv)

        document.getElementById("comment-input").value = ""  // clear input box after comment
    }
}

const submitButton = document.getElementById("submitCommentButton")
submitButton.addEventListener("click", addComment)

        
//  HOVER MOUSEOVER   //
const hoverImg = document.querySelectorAll(".hover-image")

hoverImg.forEach(image => {
    image.addEventListener("mouseover", () => {
    })
        
    image.addEventListener("mouseout", () => {
    })
})



