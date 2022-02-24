const btn = document.querySelector('#btn');
const a = document.querySelector('.a');
const link = document.querySelector('a');
const div = document.querySelector('.div');

const input = document.querySelector('form input');

// input.addEventListener('input', (event) => {
//     console.log(event.target.value);
// })


// const callFuck = (e) => {
//     console.log(e.currentTarget);
   
// }

// btn.addEventListener('click', callFuck);
// div.addEventListener('click',callFuck);

// let index = 0;

// const callFuck = () => {
//     console.log('Hello');
//     index++;
//     console.log(index);
//     if(index == 5){
//         btn.removeEventListener('click',callFuck);
//         a.removeEventListener('click',callFuck);
//     }
// }

// btn.addEventListener('click', callFuck);
// a.addEventListener('click',callFuck);


// a.addEventListener('click', (event,) => {
//     console.log(event.target);

// })

link.addEventListener('click',(e) => {
    e.preventDefault();
    alert('Hi');
    console.log(e.target);
})



