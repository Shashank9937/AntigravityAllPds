const fs = require('fs');
const html = fs.readFileSync('/Users/shashankmishra/Downloads/reading_list.html', 'utf-8');
const books = [];
const regex = /<div class="book-card[^>]*>[\s\S]*?<div class="book-title">([^<]*)<\/div>[\s\S]*?<div class="book-author">([^<]*)<\/div>[\s\S]*?<div class="book-desc">([^<]*)<\/div>/g;
let match;
while ((match = regex.exec(html)) !== null) {
  books.push({ title: match[1].trim(), author: match[2].trim(), desc: match[3].trim() });
}
fs.writeFileSync('books.json', JSON.stringify(books, null, 2));
console.log(books.length);
