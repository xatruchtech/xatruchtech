import warning from './img/warning.png';
import checked from './img/checked.png';

const loading = document.createElement('div');
loading.classList.add('d-none');

const title = document.createElement('p');
title.textContent = 'Sending your message, please wait! ';
title.classList.add('fs-3', 'my-2');
loading.appendChild(title);

const divLoader = document.createElement('div');
divLoader.classList.add('spinner-border', 'text-success');
loading.appendChild(divLoader);

const spanLoader = document.createElement('span');
spanLoader.classList.add('visually-hidden');
spanLoader.textContent = 'Loading...';
divLoader.appendChild(spanLoader);

export const succesMsg = document.createElement('div');
succesMsg.classList.add('d-none');

const successText = document.createElement('p');
successText.classList.add('fs-3', 'my-2');
successText.textContent = 'Thanks for your message we will reach back to you as soon as we can!';
succesMsg.appendChild(successText);

const checkedImg = new Image();
checkedImg.src = checked;
succesMsg.appendChild(checkedImg);

export const errorMsg = document.createElement('div');
errorMsg.classList.add('d-none');

const errorText = document.createElement('p');
errorText.classList.add('fs-3', 'my-2');
errorText.textContent = 'There was an error and your message was not sent please try again later!';
errorMsg.appendChild(errorText);

const warningImg = new Image();
warningImg.src = warning;
errorMsg.appendChild(warningImg);


export default loading;
