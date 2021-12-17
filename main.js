const firebaseConfig = {
    apiKey: "AIzaSyDCpfmfCX_y7-miudr2Ob56odnllmpgSYA",
    authDomain: "kwitter-e30d8.firebaseapp.com",
    databaseURL: "https://kwitter-e30d8-default-rtdb.firebaseio.com",
    projectId: "kwitter-e30d8",
    storageBucket: "kwitter-e30d8.appspot.com",
    messagingSenderId: "471655759530",
    appId: "1:471655759530:web:d1617afef58a37dc355ad3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function adduser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}