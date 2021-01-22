const user = document.querySelector('#user');
const password = document.querySelector('#password');
const button = document.querySelector('.btn');

button.addEventListener('click', submitBtn);

function submitBtn(e) {
  // if the user input is empty
  if (user.value === '') {
    const div = document.createElement('div');
    div.className = 'alert alert-info';
    div.appendChild(document.createTextNode('Must add user to user field'));
    setTimeout(() => {
      div.remove();
    }, 3000);
    const container = document.querySelector('.container');
    container.insertBefore(div, container.childNodes[0]);
    console.log(div);
  }
  // when you validate the user input with "user"
  if (user.value === 'user') {
    const div2 = document.createElement('div');
    div2.className = 'alert alert-success';
    div2.appendChild(document.createTextNode('Hello User'));
    setTimeout(() => {
      div2.remove();
    }, 4000);
    const container = document.querySelector('.container');

    container.insertBefore(div2, container.childNodes[0]);
    console.log(div2);
  }

  // make password input more than six words
  if (password.value.length <= 6) {
    // create div
    const div3 = document.createElement('div');
    const message = 'Must be at least 6 letters.';
    div3.className = 'valid-feedback';
    div3.textContent = message;
    setTimeout(() => {
      div3.remove();
    }, 3000);
    password.insertAdjacentHTML('afterend', message);
    console.log(div3);
  } else {
    console.log('Logged In!');
  }
  e.preventDefault();
}
