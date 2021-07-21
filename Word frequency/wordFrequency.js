let text = "JavaScript (JS)  13 15 can`t is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript.";

function SearchForDuplicates(text) {
    let words = textEditing(text).split(" ");
    const wordMap = new Map();

    for (let i = 0; i < words.length; i++) {
        let currentWordCount = wordMap.set("words", words[i]);
        let count = currentWordCount ? currentWordCount : 0;
       //wordMap.set(words[i], count + 1)
        wordMap.set("words", `${words[i]} ${ count + 1}`)
        console.log(wordMap.get("words"));
    }
    return wordMap;
}

function textEditing(text) {
    let str = text;
    return str = str.replace(/[^a-zа-яё0-9`\s]/gi, '');
}

console.log(SearchForDuplicates(text));

export default SearchForDuplicates;