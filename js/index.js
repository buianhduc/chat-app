const init = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyCQ9mivowpBFeGNx95n5Q6lt55CnyQUHVo",
    authDomain: "chat-app-be4d6.firebaseapp.com",
    databaseURL: "https://chat-app-be4d6.firebaseio.com",
    projectId: "chat-app-be4d6",
    storageBucket: "chat-app-be4d6.appspot.com",
    messagingSenderId: "64220837100",
    appId: "1:64220837100:web:20107933cb6db227b2e1c9",
    measurementId: "G-S8F0YQXRLV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase.app().name)
  view.setActiveScreen('loginPage')
  firebase.auth().onAuthStateChanged( (res) => {
    console.log(res);
    if(res){
      if(res.emailVerified){
        view.setActiveScreen('chatPage');
      }
      else{
        view.setActiveScreen('loginScreen');
        alert('Please verify your email');
      }
    }else{
      view.setActiveScreen('registerPage');
    }
  })
}
window.onload = init;
