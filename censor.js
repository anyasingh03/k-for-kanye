let bannedWords = [
 "fuck",
 "shit",
 "sex",
 "porn",
 "black"
]

// const fetchQuote = async () => {
//     try {
//         let cleanQuote = false

//         while (!cleanQuote) {
//             const response = await fetch("https://api.kanye.rest/")
//             const data = await response.json()

//             const quote = data.quote.toLowerCase()

//             const containsBadWord = bannedWords.some(word =>
//                 quote.includes(word)
//             )

//             if (!containsBadWord) {
//                 quoteEl.textContent = data.quote
//                 cleanQuote = true
//             }
//         }

//     } catch (error) {
//         quoteEl.textContent = "Please try again."
//         console.error(error)
//     }
// }

// quoteBtn.addEventListener("click", fetchQuote)