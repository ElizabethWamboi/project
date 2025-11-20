const quote = [
    "The devil does not know how to attack you when you do not get apset easily",
    "God can never get involve with our lives unless we invite Him",
    "we are the salt of the world, the light of the nation, a city set on a hill that cannot be hid",
    "we are the head and not the tail,above only and not beneath",
    "i will not beg for bread for my God provides for me according to his riches and glory in Christ Jesus",
    "I walk in favour, I operate in wisdom",
    "no weapon, no witchcraft formed aganist me shall prosper in Jesus name",
    "sickness place in my body, depression has no place in my mind",
    "God`s promises are yes and Amen",
    "The lord is my shepherd I shall not want",
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generatorquote() {
    if(usedIndexes.size>=quote.length){
        usedIndexes.clear()
    }
    
    while(true){
    const randomindex = Math.floor(Math.random()*quote.length)

    if (usedIndexes.has(randomindex)) continue

    const quotes = quote[randomindex]
    quoteElement.innerHTML = quotes
    usedIndexes.add(randomindex)
    break

    }
}
