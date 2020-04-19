import '../css/main.scss';
import 'bootstrap';

let switcher = document.querySelector('.switch');
let botCards = document.querySelectorAll('.bot-card__content');
let background = document.querySelector('.top-background');
let toph1 = document.querySelector('.heading__h1');
let toph2Switchers = document.querySelectorAll('.heading__h2--switcher');
let topNumbers = document.querySelectorAll('.heading__h1--numbers');
let footerParagraphs = document.querySelectorAll('.footer__paragraph');
let both1 = document.querySelector('.bot-heading__h1');
let botCardH1s = document.querySelectorAll('.bot-card__content--row-value__h1');

let flag = true;



function switchLayout() {
    if (flag == true) {
        botCards.forEach((botcard) => botcard.classList.replace('bot-card__content', 'bot-card__content-light'));
        toph2Switchers.forEach((toph2Switcher) => toph2Switcher.classList.replace('heading__h2--switcher', 'heading__h2--switcher-light'));
        topNumbers.forEach(topNumber => topNumber.classList.replace('heading__h1--numbers', 'heading__h1--numbers-light'));
        botCardH1s.forEach(botCardH1 => botCardH1.classList.replace('bot-card__content--row-value__h1', 'bot-card__content--row-value__h1-light'))
        footerParagraphs.forEach(footerParagraph => footerParagraph.classList.replace('footer__paragraph', 'footer__paragraph-light'))
        background.classList.replace('top-background', 'top-background-light');
        toph1.classList.replace('heading__h1', 'heading__h1-light');
        both1.classList.replace('bot-heading__h1', 'bot-heading__h1-light');
        flag = !flag;
    } else {
        botCards.forEach((botcard) => botcard.classList.replace('bot-card__content-light', 'bot-card__content'));
        toph2Switchers.forEach((toph2Switcher) => toph2Switcher.classList.replace('heading__h2--switcher-light', 'heading__h2--switcher'));
        topNumbers.forEach(topNumber => topNumber.classList.replace('heading__h1--numbers-light', 'heading__h1--numbers'));
        botCardH1s.forEach(botCardH1 => botCardH1.classList.replace('bot-card__content--row-value__h1-light', 'bot-card__content--row-value__h1'))
        footerParagraphs.forEach(footerParagraph => footerParagraph.classList.replace('footer__paragraph-light', 'footer__paragraph'))
        background.classList.replace('top-background-light', 'top-background');
        toph1.classList.replace('heading__h1-light', 'heading__h1');
        both1.classList.replace('bot-heading__h1-light', 'bot-heading__h1');
        flag = !flag;
    }





}




switcher.addEventListener('change', switchLayout)