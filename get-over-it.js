const signUpForm = document.getElementById('form-signup')

signUpForm.addEventListener('submit',async function(event) {
  event.preventDefault();
  const email = document.getElementById('email-input').value
  const password = document.getElementById('password-input').value
  const passwordConfirm = document.getElementById('password-confirm').value
  console.log(email)
  console.log(password)
  console.log(passwordConfirm)
  if (password !== passwordConfirm) {
    const errMessageContainer = document.getElementById('error-message')
    errMessageContainer.innerText = "Mật khẩu không khớp, nhập lại đê bạn eii"
  } else {
    const data = {
      username: email,
      password: password,
    }
    const url = "http://5dc6a9cb317717001434f796.mockapi.io/api/users"
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    });
  }
})