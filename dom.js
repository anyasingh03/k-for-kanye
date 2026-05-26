const quoteBtn = document.querySelector(".generator")
const quoteEl = document.querySelector("#quote-element")

//Global Data
let favorited = []  //saved shows

// LOCAL STORAGE FUNCTIONS
function loadfavorited(){
    const saved = localStorage.getItem("favorited")
    if(saved !== null){
        favorited = JSON.parse(saved)
    }
    renderWatchList()
}

function saveWatchList(){
    localStorage.setItem("favorited", JSON.stringify(favorited))
    updateFavoriteCount() // update the counter
}