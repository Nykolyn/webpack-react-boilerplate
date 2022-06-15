// import { createRoot } from 'react-dom/client';
// import App from './App';

// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(<App />);

import { cube, square } from './maths.js';

function component() {
 const element = document.createElement('pre');

 element.innerHTML = [
   'Hello webpack!',
   '5 cubed is equal to ' + cube(5)
 ].join('\n\n');

  return element;
}

document.body.appendChild(component());