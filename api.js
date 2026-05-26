const quoteBtn = document.querySelector(".generator")
const quoteEl = document.querySelector("#quote-element")

const fetchQuote = async () => {
    const response = await fetch("https://api.kanye.rest", {
        headers: { Accept: "application/json" }
    })

    const data = await response.json()

    quoteEl.textContent = `"${data.quote}"`
}

quoteBtn.addEventListener("click", fetchQuote)

for (let i = 0; i< quotes.json.length; i++){
    let isSaved = false
}

const saveIcon = document.querySelector("#favorites-heart")

