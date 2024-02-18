import url from 'node:url';

const anURL = new URL('https://example.org');
anURL.pathname = '/a/b/c';
anURL.search = '?d=e';
anURL.hash = '#fgh';

console.log(anURL)
console.log(anURL.href)