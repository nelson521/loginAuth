const user = document.querySelector('#user');
const password = document.querySelector('#password');
const button = document.querySelector('.btn');

button.addEventListener('click', submitBtn);

function submitBtn(e) {
  if (user.value === '') {
    const div = document.createElement('div');
    div.className = 'alert alert-info';
    div.appendChild(document.createTextNode('You need words!!'));
    setTimeout(() => {
      div.remove();
    }, 3000);
    const container = document.querySelector('.container');
    container.insertBefore(div, container.childNodes[0]);
    console.log(div);
  } else {
    console.log(user.value);
  }
  e.preventDefault();
}
