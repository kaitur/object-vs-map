import * as ws from './wordFrequency.js';
describe('word frequency', () => {
    const text = "JavaScript (JS) js 13 15 can`t is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the 13 15 scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, 13 and declarative (functional programming) styles. 13 Read more about JavaScript.";
    test('matches if the actual array does not contain the expected elements', () => {
        expect(ws.funcOfCreating(text)).toEqual(expect.not.arrayContaining(['']),
        );
    });
    test('matches if the received value does not contain the expected substring', () => {
        expect(ws.funcOfReplacement(text)).toEqual(expect.not.stringContaining('.' && ',' && '(' && ')' && '!' && '@' && '#' && '$' && '%' && '^' && '*' && '<' && '>'));
    });
    test('matches if the received value contain the expected substring', () => {
        expect(ws.funcOfReplacement(text)).toEqual(expect.stringContaining('`' && '-' ));
    });
});
//  запитати про різницю між it and test