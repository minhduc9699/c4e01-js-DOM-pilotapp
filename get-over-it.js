const signUpForm = document.getElementById('form-signup')
const signInForm = document.getElementById('form-signin')
const url = "http://5dc6a9cb317717001434f796.mockapi.io/api/users"

if (signInForm) {
  signInForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    const email = document.getElementById('email-input').value
    const password = document.getElementById('password-input').value
    const rememberMeChecked = document.getElementById('remember-me').checked
    const request = await fetch(url)
    const data = await request.json()
    const userFound = data.filter(function(item){
      return item.username == email && item.password == password
    })[0];
    if (rememberMeChecked && userFound) {
      localStorage.setItem('authUser', userFound.username)
    }
    if (userFound) {
      window.location.href = './homepage.html'
    }
  });
}

if(signUpForm) {
  signUpForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    const email = document.getElementById('email-input').value
    const password = document.getElementById('password-input').value
    const passwordConfirm = document.getElementById('password-confirm').value
    if (password !== passwordConfirm) {
      const errMessageContainer = document.getElementById('error-message')
      errMessageContainer.innerText = "Mật khẩu không khớp, nhập lại đê bạn eii"
    } else {
      const data = {
        username: email,
        password: password,
      }
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json"
        }
      });
    }
  })
}
