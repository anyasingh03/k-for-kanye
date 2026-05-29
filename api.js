const quoteBtn = document.querySelector(".generator")
const quoteEl = document.querySelector("#quote-element")


// filter words and render quotes
const bannedWords = [
    "sex",
    "porn",
    "kill",
    "drugs",
    "shit",
    "fuck",
    "black"
]

const isClean = (text) => {
    const lower = text.toLowerCase()

    return !bannedWords.some(word =>
        lower.includes(word.toLowerCase())
    )
}

const fetchQuote = async () => {
    try {

        let cleanQuote = false

        while (!cleanQuote) {

            const response = await fetch("https://api.kanye.rest/")

            const data = await response.json()

            const quote = data.quote.toLowerCase()

            const containsBadWord = bannedWords.some(word =>
                quote.includes(word)
            )

            if (!containsBadWord) {
                quoteEl.textContent = `"${data.quote}"`
                cleanQuote = true
                console.log("clean quote found")
            }

            else {
                console.log("found bad word ‼️")
            }

        }
    } catch (error) {
        quoteEl.textContent = "Please try again later."
        console.error(error)
    }
}

quoteBtn.addEventListener("click", fetchQuote)


// save quotes

let savedQuotes = []

function saveQuote() {
    saveBtn.addEventListener("click")
    localStorage.setItem('savedQuote', JSON.stringify(quoteEl))
    console.log("clicked the button and it saved to storage")
}

function createFavorite(quote){
    saveBtn.addEventListener("click", saveQuote)
    console.log("saved!")
    const item = document.createElement("li")
    item.innerText = `"${quoteEl}"`
    savedList.appendChild(savedQuote)
    
}

for (quote of quotes){
    savedList.appendChild(createFavorite(quote))
    console.log("created a favorite!")
}
// return item

