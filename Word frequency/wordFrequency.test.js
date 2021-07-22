import * as ws from './wordFrequency.js';
describe('word frequency', () => {
    const text = "JavaScript (JS) js 13 15 can`t is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the 13 15 scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, 13 and declarative (functional programming) styles. 13 Read more about JavaScript.";
    test('checking for no spaces after deleting characters', () => {
        expect(ws.funcOfCreating(text)).toEqual(expect.not.arrayContaining(['']),
        );
    });
    test('checking for the absence of characters that do not belong to words', () => {
        expect(ws.funcOfReplacement(text)).toEqual(expect.not.stringContaining('.' && ',' && '(' && ')' && '!' && '@' && '#' && '$' && '%' && '^' && '*' && '<' && '>'));
    });
    test('checking for the presence of characters that occur in words', () => {
        expect(ws.funcOfReplacement(text)).toEqual(expect.stringContaining('`' && '-' ));
    });
});