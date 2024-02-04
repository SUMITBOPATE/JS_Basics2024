console.log('Hello!');
let count = 0;
increment.addEventListener('click', () => {
  count++;
  countDisplay.innerText = count;
});
decrement.addEventListener('click', () => {
  count--;
  countDisplay.innerText = count;
});
