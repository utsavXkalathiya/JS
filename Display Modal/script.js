const openModalBtnElement = document.querySelector('#openModal');
const modalElement = document.querySelector('.modal');
const modalContentElement = modalElement.querySelector('.modal__content')

openModalBtnElement.addEventListener('click', () => {
    modalElement.classList.add('open');
    console.log("Button pressed!");
});

modalContentElement.addEventListener('click', () => {
    modalElement.classList.remove('open');
});
