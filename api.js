const quoteBtn = document.querySelector(".generator")
const quoteEl = document.querySelector("#quote-element")

const fetchQuote = async () => {
    const response = await fetch("https://api.kanye.rest", {
        headers: { Accept: "application/json" }
    })

    const data = await response.json()


    let cleanQuote = false

    const quote = data.quote.toLowerCase()

    const containsBadWord = quote.include(bannedWords.toLowerCase().trim())

    if (!containsBadWord) {
        quoteEl.textContent = `"${data.quote}"`
        cleanQuote = true
        console.log("No bad words cuaght.")
    } else {
        quoteEl.textContent = "Censored. Please try again."
        console.log("Bad word caught.")
    }
    
    quoteEl.textContent = `"${data.quote}"`
}

quoteBtn.addEventListener("click", fetchQuote)

const saveIcon = document.querySelector("#favorites-heart")




//  catch (error) {
//         quoteEl.textContent = "Please try again."
//         console.error(error)
//     }
// }

