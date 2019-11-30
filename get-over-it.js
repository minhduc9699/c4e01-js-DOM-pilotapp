const signUpForm = document.getElementById('form-signup')

signUpForm.addEventListener('submit', function(event) {
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
    
  }

})