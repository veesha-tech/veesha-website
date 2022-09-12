'use strict';

const bodyCont = document.querySelector('body');
const contDet = document.querySelector('#contact');
const contInf = document.querySelector('#contact_info');
const navPan = document.querySelector('#nav_panel');

// Buttons
const okBtn = document.querySelector('.btn--ok');
const conBtn = document.querySelector('.btn--contact');
const mobile = document.querySelector('#mobile_toggler');

// Function Contact toggler
function toggleContact() {
    contDet.classList.toggle('hidden');
    bodyCont.classList.toggle('contact--active');
}

// Contact information
contInf.addEventListener('click', toggleContact);

// Okay button
okBtn.addEventListener('click', toggleContact);

// Contact button
conBtn.addEventListener('click', toggleContact);


mobile.addEventListener('click', function () {
    mobile.classList.toggle('is-active');
    navPan.classList.toggle('nav--active');
});

// All items Click Toggle
for (let i = 0; i <= 2; i++) {

    navItm[i].addEventListener('click', function () {
        mobile.classList.toggle('is-active');
    });
}