const FormSubmit = () => {
  const formContainer = document.createElement('div');

  formContainer.classList.add('px-5');

  formContainer.innerHTML += `
    <p class="fs-2 text-white mb-4">Send me a message</p>
  `;

  const nameInp = document.createElement('input');
  nameInp.classList.add('form-control', 'my-2');
  nameInp.type = 'text';
  nameInp.placeholder = 'Enter your name here';
  formContainer.appendChild(nameInp);

  const emailImp = document.createElement('input');
  emailImp.classList.add('form-control', 'my-2');
  emailImp.type = 'email';
  emailImp.placeholder = 'Enter your email here';
  formContainer.appendChild(emailImp);

  const messageImp = document.createElement('textarea');
  messageImp.classList.add('form-control', 'my-2');
  messageImp.rows = '6';
  messageImp.placeholder = 'Enter your message here';
  formContainer.appendChild(messageImp);

  const buttonInp = document.createElement('button');
  buttonInp.classList.add('btn', 'btn-dark');
  buttonInp.type = "click";
  buttonInp.textContent = "Send Message";
  formContainer.appendChild(buttonInp);
  
  const sendInfo = async(name, email, message) => {
    await fetch('https://formspree.io/f/xdoyqoze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    }).then((data) => data)
    .then((response) => {
      console.log(response.json());
    }).catch((err) => {
      console.log(err);
    });
  };
  
  buttonInp.addEventListener('click', () => {
    sendInfo(nameInp.value, emailImp.value, messageImp.value);
    nameInp.value = '';
    emailImp.value = '';
    messageImp.value = '';
  });

  return formContainer;
};

export default FormSubmit;