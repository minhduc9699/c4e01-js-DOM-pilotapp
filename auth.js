const authUser = localStorage.getItem('authUser')
if (!authUser) {
  window.location.href = './sign-in.html'
}