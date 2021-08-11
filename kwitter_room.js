
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyC6tHEmQuBd1NIpPwyJRSSujz3U-h7w52E",
    authDomain: "classtest-405a9.firebaseapp.com",
    databaseURL: "https://classtest-405a9-default-rtdb.firebaseio.com",
    projectId: "classtest-405a9",
    storageBucket: "classtest-405a9.appspot.com",
    messagingSenderId: "1079143123401",
    appId: "1:1079143123401:web:4ced3600bf346b0ef44018"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


  function addRoom()
  {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
  }

  function getData() 
  { 
    firebase.database().ref("/").on('value', function(snapshot) 
    { 
      document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) 
    { 
      childKey = childSnapshot.key; Room_names = childKey; 
      console.log("Room Name - " + Room_names); 
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row; 
    }); 
  }); 
} 
getData(); 
function redirectToRoomName(name) 
{ 
  console.log(name); 
  localStorage.setItem("room_name", name); 
  window.location = "kwitter_page.html"; 
}
function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location ="index.html";
}

