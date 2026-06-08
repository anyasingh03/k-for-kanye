// const quoteBtn = document.querySelector(".generator")
// const quoteEl = document.querySelector("#quote-element")

// const saveBtn = document.querySelector("#save-button")
// const favoritesContainer = document.querySelector("#favorites-container")
// const savedQuote = document.createElement("li")

// ---- index.html: save button ----
const saveBtn = document.querySelector("#save-button")

if (saveBtn) {
    saveBtn.addEventListener("click", () => {
        const quoteEl = document.querySelector("#quote-element")
        const quoteText = quoteEl.textContent.trim()

        if (!quoteText || quoteText === "Generate a Quote!") {
            alert("Generate a quote first!")
            return
        }

        const saved = JSON.parse(localStorage.getItem("savedQuotes") || "[]")

        if (!saved.includes(quoteText)) {
            saved.push(quoteText)
            localStorage.setItem("savedQuotes", JSON.stringify(saved))
            console.log("Quote saved!")
        } else {
            alert("This quote is already saved!")
        }
    })
}

// ---- favorites.html: render saved quotes ----
const favoritesList = document.querySelector("#favorites")

if (favoritesList) {
    const saved = JSON.parse(localStorage.getItem("savedQuotes") || "[]")

    if (saved.length === 0) {
        favoritesList.textContent = "No saved quotes!"
    } else {
        favoritesList.textContent = "" // clear default text
        saved.forEach(quote => {
            const item = document.createElement("li")
            item.textContent = quote
            favoritesList.appendChild(item)
        })
    }
}