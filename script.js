const buttons = document.querySelectorAll('.third-part_services_second_img_link');

buttons.forEach(item => {
  item.addEventListener('click', (event) => {
    event.target.classList.toggle('rotate');
  })
})

const tab1 = document.querySelector('.tab1');
const btn1 = document.querySelector('.btn1');

btn1.addEventListener('click', () => {
  tab1.classList.toggle('show');
})

const tab2 = document.querySelector('.tab2');
const btn2 = document.querySelector('.btn2');

btn2.addEventListener('click', () => {
  tab2.classList.toggle('show');
})

const tab3 = document.querySelector('.tab3');
const btn3 = document.querySelector('.btn3');

btn3.addEventListener('click', () => {
  tab3.classList.toggle('show');
})

const tab4 = document.querySelector('.tab4');
const btn4 = document.querySelector('.btn4');

btn4.addEventListener('click', () => {
  tab4.classList.toggle('show');
})

const tab5 = document.querySelector('.tab5');
const btn5 = document.querySelector('.btn5');

btn5.addEventListener('click', () => {
  tab5.classList.toggle('show');
})