import _ from 'lodash';
console.log('test B');
console.log('Page B', _.join(['Hello', 'PageB'], ' '));
const heading = document.createElement('div');
heading.textContent = 'Hello, PageB!';
document.body.appendChild(heading);