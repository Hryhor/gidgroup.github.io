import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const portfolioCard = document.querySelectorAll('.projects__portfolio-card');
const watchWindow = document.querySelector('.watch-window');

const modals = () => {
    function bindModal(trigger, modal, close) {
       trigger.addEventListener('click', (e) => {
         if (e.target) {
           e.preventDefault();
         }

         modal.style.display = "block"
         document.body.style.overflow = "hidden";
       });
 
       close.addEventListener('click', () => {
         modal.style.display = "none"
         document.body.style.overflow = "";
       });
    }
 
    bindModal();
 }
 
 modals();
