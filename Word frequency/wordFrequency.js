let text = "JavaScript (JS) js 13 15 can`t is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the 13 15 scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, 13 and declarative (functional programming) styles. 13 Read more about JavaScript.";

function SearchForDuplicates(text) {
    let arrayOfWords = creatingAnArrayOfWords(text)
    const wordMap = new Map();

    for (let i = 0; i < arrayOfWords.length; i++) {
        let currentWordCount = wordMap.get(arrayOfWords[i]);
        let count = currentWordCount ? currentWordCount : 0;
        wordMap.set(arrayOfWords[i], count + 1)
    }
    return wordMap;
}

function stringReplacement(text) {
    let strReplacement = text.replace(/[^a-zа-яё0-9`-\s]/gi, '').toLowerCase();
    return strReplacement;
}

function creatingAnArrayOfWords(text) {
    let arrayOfWords = stringReplacement(text).split(" ");
    return arrayOfWords;
}

function consoleOutput() {console.log(SearchForDuplicates(text));}

consoleOutput();

export {creatingAnArrayOfWords as funcOfCreating, stringReplacement as funcOfReplacement};

