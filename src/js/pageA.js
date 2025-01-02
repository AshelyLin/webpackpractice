import _ from 'lodash';
console.log('Page A', _.join(['Hello', 'PageA'], ' '));
const heading = document.createElement('div');
heading.textContent = 'Hello, PageA!';
document.body.appendChild(heading);