import SearchForDuplicates from './wordFrequency';
describe('word frequency', () => {
    const text = "JavaScript (JS) can`t is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript.";
    test('reading array', () => {
        expect(SearchForDuplicates(text)).not.toHaveProperty('');
    })
    test('search symbol `', () => {
        expect(SearchForDuplicates(text)).toHaveProperty('can`t');
    })
})