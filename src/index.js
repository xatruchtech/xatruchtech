import './style.css';
import FormSubmit from './Form';

const navBar = document.getElementById('links');

const Home = document.getElementById('home');
const About = document.getElementById('about');
const Features = document.getElementById('features');
const Contact = document.getElementById('contact');

const sections = [Home, About, Features, Contact];
const menuLinks = [];

navBar.childNodes.forEach((link) => {
  switch(link.textContent) {
    case 'Home':
      menuLinks.push(link);
      break;
    case 'About':
      menuLinks.push(link);
      break;
    case 'Contact':
      menuLinks.push(link);
      break;
    case 'Features':
      menuLinks.push(link);
      break;
    default:
      
  }
});

const checkSections = (linktext) => {
  sections.forEach((section) => {
    if(section.id === linktext) {
      section.classList.remove('d-none');
    }else {
      section.classList.add('d-none');
    }
  });
};

const activeLinks = (textlink) => {
  menuLinks.forEach((link) => {
    if (link.childNodes[0].textContent === textlink) {
      link.childNodes[0].classList.add('active');
    } else {
      link.childNodes[0].classList.remove('active');
    }
  });
};

let mobileMenu = 0;

const closeMobileNenu = () => {
  if (mobileMenu === 1) {
    navBar.classList.toggle('d-none');
    mobileMenu = 0;
  }
};

document.getElementById('menuIconBtn').addEventListener('click', () => {
  mobileMenu = 1;
  navBar.classList.toggle('d-none');
});

navBar.addEventListener('click', (event) => {
  const link = event.target;
  switch(link.textContent) {
    case 'Home':
      checkSections('home');
      activeLinks('Home');
      break;
    case 'About':
      checkSections('about');
      activeLinks('About');
      break;
    case 'Features':
      checkSections('features');
      activeLinks('Features');
      break;
    case 'Contact':
      checkSections('contact');
      activeLinks('Contact');
      break;
    default:
  }
  closeMobileNenu();
});

const formContainer = document.getElementById('formContainer');
formContainer.appendChild(FormSubmit());
