const DOM = {
    playerData: document.getElementById('playerData'),
    header: document.getElementById('header'),
    toggleBtn: document.querySelector('.header__toggle_btn'),
    toggleBtnIcon: document.querySelector('.header__toggle_btn i'),
    dropDownMenu: document.querySelector('.header__dropdown-menu'),
    headerFilterSeason: document.getElementById('headerFilterSeason'),

    ratingTitle: document.querySelector('.rating__title'),
    ratingSubtitle: document.querySelector('.rating__subtitle'),

    toggleFilter: document.querySelector('.filter__wrapper'),
    toggleFilterTitle: document.querySelector('.filter__wrapper span'),
    toggleFilterIcon: document.querySelector('.filter__arrow'),
    filterList: document.querySelector('.filter__list'),

    ratingTables: document.querySelectorAll('.table'),
    ratingTheads: document.querySelectorAll('.thead'),
    ratingTbodies: document.querySelectorAll('.tbody'),
    sections: document.querySelectorAll('section'),
    navLinks: document.querySelectorAll('header nav a'),
    statistic: document.querySelector('.factions__tbody'),
    modal: document.getElementById('modal'),
    modalTitle: document.querySelector('.modal__title'),
    modalBody: document.querySelector('.modal__tbody'),
    modalBan: document.querySelector('.modal__ban'),
    overlay: document.getElementById('overlay'),
    closeModalButtons: document.querySelectorAll('[data-close-button]'),
    partiesSlider: document.querySelector('.parties__slider-wrapper'),
    partiesTable: document.querySelector('.parties__table'),
};