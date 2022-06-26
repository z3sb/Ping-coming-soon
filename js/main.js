let input = document.querySelector("input[type='email']");
let button = document.querySelector("input[type='submit']");
let error = document.querySelector('form div')

button.addEventListener('click', (e) => {
  e.preventDefault();
  validation();
})
function validation(){
  let regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!(regex.test(input.value))){
    error.classList.add('error');
    input.value = 'example@email/com'
  } else{
    error.classList.remove('error')
  }
}