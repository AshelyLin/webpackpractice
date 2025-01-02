import '../css/styles.css';
import './pageA';
import './pageB';

console.log('index');
const heading = document.createElement('h3');
heading.textContent = 'Hello, Webpack!';
document.body.appendChild(heading);