import loading, { succesMsg, errorMsg } from "./Messages";

const FormSubmit = () => {
  const formContainer = document.createElement('div');

  formContainer.classList.add('px-5');

  const displayForm = document.createElement('div');
  formContainer.appendChild(displayForm);

  const title = document.createElement('p');
  title.textContent = 'Send us your questions:';
  title.classList.add('fs-2', 'text-white', 'mb-4');
  displayForm.appendChild(title);

  const nameInp = document.createElement('input');
  nameInp.classList.add('form-control', 'my-2');
  nameInp.type = 'text';
  nameInp.placeholder = 'First name and last name';
  displayForm.appendChild(nameInp);

  const emailImp = document.createElement('input');
  emailImp.classList.add('form-control', 'my-2');
  emailImp.type = 'email';
  emailImp.placeholder = 'Email';
  displayForm.appendChild(emailImp);

  const messageImp = document.createElement('textarea');
  messageImp.classList.add('form-control', 'my-2');
  messageImp.rows = '6';
  messageImp.placeholder = 'Message';
  displayForm.appendChild(messageImp);

  const buttonInp = document.createElement('button');
  buttonInp.classList.add('btn', 'btn-dark');
  buttonInp.type = "click";
  buttonInp.textContent = "Send Message";
  buttonInp.disabled = true;
  displayForm.appendChild(buttonInp);

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  let name = 0;
  let email = false;
  let message = 0;

  displayForm.childNodes.forEach((child) => {
    if (child.tagName === 'INPUT' || child.tagName === 'TEXTAREA') {
      
      child.addEventListener('keydown', (e) => {
        switch(e.target.type) {
          case 'text':
            name = e.target.value.length;
            if (name > 4) {
              e.target.classList.remove('outline-red');
            } else {
              e.target.classList.add('outline-red');
            }
            break;
          case 'email':
            email = validateEmail(e.target.value);
            if (email) {
              e.target.classList.remove('outline-red');
            } else {
              e.target.classList.add('outline-red');
            }
            break;
          case 'textarea':
            message = e.target.value.length;
            if (message > 10) {
              e.target.classList.remove('outline-red');
            } else {
              e.target.classList.add('outline-red');
            }
            break;
          default:

        }
        if (name > 4 && email && message > 10) {
          buttonInp.disabled = false;
          buttonInp.classList.add('btn-success');
          buttonInp.classList.remove('btn-dark');
        } else {
          buttonInp.disabled = true;
          buttonInp.classList.add('btn-dark');
          buttonInp.classList.remove('btn-success');
        }

      });
    }
  });

  formContainer.appendChild(loading);
  formContainer.appendChild(succesMsg);
  formContainer.appendChild(errorMsg);
  
  const sendInfo = async(name, email, message) => {
    await fetch('https://formspree.io/f/mayarnbz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    }).then((data) => {
      switch (data.status) {
        case 404:
          loading.classList.add('d-none');
          errorMsg.classList.remove('d-none');
          break;
        case 200:
          loading.classList.add('d-none');
          succesMsg.classList.remove('d-none');
          break;
        default:
          loading.classList.add('d-none');
          errorMsg.classList.remove('d-none');
      }
    })
    .catch(() => {
      loading.classList.add('d-none');
      errorMsg.classList.remove('d-none');
    });
  };
  
  buttonInp.addEventListener('click', () => {
    displayForm.classList.add('d-none');
    loading.classList.remove('d-none');
    sendInfo(nameInp.value, emailImp.value, messageImp.value);
    nameInp.value = '';
    emailImp.value = '';
    messageImp.value = '';
  });

  return formContainer;
};

export default FormSubmit;