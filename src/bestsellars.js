export function makeCategoryBooksMarkup(data) {
    return `
      <ul class="category-books-list">
        ${data
            .map(element => {
                return `
            <li class="books-list-item">
              ${createBookMarkup(element)}
            </li>
          `;
            })
            .join('')}
      </ul>
    `;
}

const { scrollToTopButton, toTopTarget } = getRefs();

export const toTopObserver = new IntersectionObserver(cb);

function cb(entries) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            scrollToTopButton.classList.remove('hidden');
        } else {
            scrollToTopButton.classList.add('hidden');
        }
    });
}

export function scrollToTop(event) {
    window.scroll({
        top: 0,
        behavior: 'smooth',
    });
}

toTopObserver.observe(toTopTarget);
scrollToTopButton.addEventListener('click', scrollToTop);


const { renderingContainer } = getRefs();

// Fetch and render bestsellers:
export async function renderTopBooks() {
    let data;
    const savedData = sessionStorage.getItem('bestsellers');

    // Check if there's saved data in sessionStorage...
    if (savedData) {
        data = JSON.parse(savedData);
    } else {
        // ...otherwise fetch data from server
        try {
            data = await getTopBooksArray();
            sessionStorage.setItem('bestsellers', JSON.stringify(data));
        } catch (error) {
            console.log(error);
        }
    }
    console.log(data);
    const bestsellerListMarkup = `
      <ul class="category-blocks-list">
        ${data
            .map(
                ({ list_name, books }) => `
              <li class="bestseller-category">
          <h3 class="bestseller-category-title">${list_name}</h3>
          <ul class="books-list">
            ${books
                        .map(
                            book => `
              <li class="books-list-item bestsellers-book-item">
                ${createBookMarkup(book)}
              </li>
            `
                        )
                        .join('')}
          </ul>
          <button type="button" class="button see-more-btn" data-id="${list_name}">See more</button>
        </li>
            `
            )
            .join('')}
      </ul>
    `;

    renderingContainer.innerHTML = bestsellerListMarkup;
}

renderTopBooks();

export default async function getTopBooksArray() {
    Notiflix.Loading.dots();
    // Notiflix.Loading.pulse();
    const categoriesArray = async () => {
        const response = await fetch(
            'https://books-backend.p.goit.global/books/top-books'
        );
        const data = await response.json();
        // console.log(data);
        Notiflix.Loading.remove();
        return data;
    };
    try {
        return categoriesArray();
    } catch (error) {
        Notiflix.Loading.remove();
        Notiflix.Notify.failure('Something went wrong. Please try again');
        console.log(error);
    }
}

import axios from 'axios';
import Notiflix from 'notiflix';
export async function fetchSelectedBooks(category) {
    Notiflix.Loading.dots('Please wait');
    const categoriesArray = async category => {
        const response = await fetch(
            `https://books-backend.p.goit.global/books/category?category=${category}`
        );
        const data = await response.json();
        console.log(data);
        Notiflix.Loading.remove();
        return data;
    };
    try {
        const { data } = await axios.get(
            `https://books-backend.p.goit.global/books/category?category=${category}`
        );
        Notiflix.Loading.remove();
        return data;
        return categoriesArray(category);
    } catch (error) {
        Notiflix.Loading.remove();
        Notiflix.Notify.failure('Something went wrong. Please try again');
        console.log(error);
    }
}

export function createBookMarkup({
    _id: id,
    title,
    author,
    description,
    // list_name,
    book_image: image,
    // book_image_width: width,
    // book_image_height: height,
}) {
    return `
    <a class="book-link" href="" aria-label="Book thumbnail">
      <div class="book-thumb">
        <img class="book-image" src="${image}" loading="lazy" data_id=${id} alt="${description}"/>
        <div class="book-image-overlay" data_id=${id} aria-label="${title}">
          <p class="book-image-overlay-text">Quick view</p>
        </div>
      </div>
      <div class="book-item-meta">
        <h3 class="book-title">${title}</h3>
        <p class="book-author">${author}</p>
      </div>
    </a>
  `;
}


export default function () {
    return {
        // Header
        header: document.querySelector('header'),
        headerNavLinks: document.querySelectorAll('.page-navigation-link '),

        // Scroll to top:
        scrollToTopButton: document.querySelector('.back-to-top'),
        toTopTarget: document.querySelector('.to-top-target'),

        // Color scheme switcher:
        colorSwitcherCnt: document.querySelector('.color-scheme-switcher'),
        colorSwitcher: document.querySelector('#color-scheme-switcher-checkbox'),
        colorSwitcherSlider: document.querySelector(
            '.color-scheme-switcher-slider'
        ),

        //Categories menu:
        allCategoriesBtn: document.querySelector('button[name=allcategories]'),
        categoryListEl: document.querySelector('.categories_list'),
        categoriesListContainer: document.querySelector('.categories'),
        categoryContainerEl: document.querySelector('.content-rendering-container'),
        mainTitle: document.querySelector('.main-title'),
        // selectedBooksListEl: document.querySelector('.selected-category'),
        selectedBooksListEl: document.querySelector('.category-blocks-list'),

        // Content part rendering container
        renderingContainer: document.querySelector('.content-rendering-container'),

        // Support Ukraine
        supportUkraineCnt: document.querySelector('.support-list'),

        // Sign up
        openSignUpBtnEl: document.querySelector('#signUp-open-btn'),
        signUpModalEl: document.querySelector('#sign-up-modal'),
        signUpModalWindowEl: document.querySelector('#sign-up-modal-window'),
        closeSignUpBtnEl: document.querySelector('#signUp-modal-close-btn'),
        openSignUpBtnSecondEl: document.querySelector('#signUp-open-btn-second'),

        // Sign in
        openSignInBtnEl: document.querySelector('#signIn-open-btn'),
        signInModalEl: document.querySelector('#sign-in-modal'),
        signInModalWindowEl: document.querySelector('#sign-in-modal-window'),
        closeSignInBtnEl: document.querySelector('#signIn-modal-close-btn'),

        // Auth form elements
        authForm: document.querySelector('.modal-form'),
        nameField: document.querySelector('[name=user_name]'),
        emailField: document.querySelector('[name=user_email]'),
        passwordField: document.querySelector('#signup-user-password'),
        authSubmitBtn: document.querySelector('modal-form__submit'),

        // Pop Up
        bookCard: document.querySelector('.book-link'),
        closeModalPopUpBtn: document.querySelector('[data-pop-up-close]'),
        modalPopUp: document.querySelector('[data-pop-up]'),
        modalContentEl: document.querySelector('.modal-pop-up-content'),

        //User
        userName: document.getElementById('user-name'),
        formSingUp: document.getElementById('singUp'),
        logOut: document.getElementById('logOut'),
        userBarMenu: document.getElementById('userBarMenu'),
        logOutMenu: document.getElementById('logOutMenu'),
        formLogIn: document.getElementById('logIn'),

        // Shopping list
        divEl: document.querySelector('.shopping__list'),
        addBtnEL: document.querySelector('.modal-pop-up-btn'),
        // Paginations
        paginationsSection: document.querySelector('.paginations'),
        paginationContainerPages: document.querySelector(
            '.paginations__container-pages'
        ),
        paginationContainerBackBtn: document.querySelector(
            '.paginations__container-back'
        ),
        paginationContainerEndBtn: document.querySelector(
            '.paginations__container-end'
        ),
        startButton: document.querySelector("button[name='startButton']"),
        previousButton: document.querySelector("button[name='previousButton']"),
        nextButton: document.querySelector("button[name='nextButton']"),
        endButton: document.querySelector("button[name='endButton']"),
        activButton: document.querySelector('.active'),

        singUpBtn: document.querySelector('.userbar-btn'),
    };
}

const { mainTitle } = getRefs();

export function renderMainTitle(id) {

    const allWordsButLast = id.split(' ').slice(0, -1).join(' ');

    const words = id.split(' ');
    const lastWord = words[words.length - 1];

    mainTitle.innerHTML = `${allWordsButLast} <span class="main-title--last-word-static">${lastWord}</span>`;
}

// const { renderingContainer } = getRefs();

// import { makeCategoryBooksMarkup } from './allBooksMarkup';

// export function renderBooksByCategory(data) {
//     const markup = makeCategoryBooksMarkup(data);
//     renderingContainer.innerHTML = markup;
// }

categoryContainerEl.addEventListener('click', seeMoreBtnClickHandler);

async function seeMoreBtnClickHandler(e) {
    if (!e.target.classList.contains('see-more-btn')) return;

    const id = e.target.dataset.id;
    const data = await fetchSelectedBooks(id);

    renderMainTitle(id);

    const categoriesBtn = document.querySelectorAll('.category-btn');
    const activeCategoryBtn = document.querySelector('.active-category');
    for (const btn of categoriesBtn) {
        if (btn.dataset.id === id) {
            btn.classList.add('active-category');
        }
    }
    activeCategoryBtn.classList.remove('active-category');

    renderBooksByCategory(data);
    scrollToTop();
}