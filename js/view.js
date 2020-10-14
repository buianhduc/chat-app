const view = {}
view.setActiveScreen = (screenName) => {
  switch(screenName) {
    case 'welcomeScreen':
      document.getElementById('app').innerHTML 
      = components.welcomPage
    break
    case 'registerPage':
      document.getElementById('app').innerHTML
      = components.registerPage
      document.getElementById('redirect-login')
      .addEventListener('click', () => {
        view.setActiveScreen('loginPage')
      })
      const registerForm = document.getElementById('register-form')
      registerForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const dataRegister= {
          firstName: registerForm.firstName.value,
          lastName: registerForm.lastName.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value,
        }
        controller.register(dataRegister)
      })
    break
    case 'loginPage':
      document.getElementById('app').innerHTML
      = components.loginPage
      document.getElementById('redirect-register')
      .addEventListener('click', () => {
        view.setActiveScreen('registerPage')
      })

      const loginForm = document.getElementById('login-form');
      loginForm.addEventListener('submit',(event)=>{
        event.preventDefault()
        const dataRegister= {
          email: loginForm.email.value,
          password: loginForm.password.value
        };
        controller.login(dataRegister);
      })
    break
      case 'chatPage':
        document.getElementById('app').innerHTML = components.chatPage;
        var form = document.getElementById('messageInput');
        form.addEventListener('submit',(event) => {
          event.preventDefault();
          view.addMessage(form.message.value);
        }) 
      break
    }
}
view.setErrorMessage = (elementId, message) => {
  document.getElementById(elementId).innerText = message
}

view.addMessage = (content) => {
  const conversation_detail = document.getElementsByClassName('conversation-detail')[0];
  conversation_detail.insertAdjacentHTML('beforeend',`
  <div class = "sentMess d-flex flex-row justify-content-end">
  <div class="SentMessContent message">${content}</div>
</div>
  `);
}
