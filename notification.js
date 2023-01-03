const btn = document.querySelector('.btn');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');

const count = document.querySelector('.count');

const rc1 = document.querySelector('.rc1');
const rc2 = document.querySelector('.rc2');
const rc3 = document.querySelector('.rc3');

btn.addEventListener('click', () => {

    p1.classList.add('active')
    p2.classList.add('active')
    p3.classList.add('active')

    count.classList.add('active')

    rc1.classList.add('active')
    rc2.classList.add('active')
    rc3.classList.add('active')
})