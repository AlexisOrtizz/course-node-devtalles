
const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const wordCount = content.split(' ').length;
const wordReactCount = content.match(/react/gi ?? []).length;

console.log(`The README.md file contains ${wordCount} words.`);
console.log(`The README.md file contains ${wordReactCount} REACT words.`);