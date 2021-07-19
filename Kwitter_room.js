var firebaseConfig = {
    apiKey: "AIzaSyAyXc0bjueXBG69slyWnWm0_EAEMoxkueo",
    authDomain: "project-93---95-chat-app.firebaseapp.com",
    databaseURL: "https://project-93---95-chat-app-default-rtdb.firebaseio.com",
    projectId: "project-93---95-chat-app",
    storageBucket: "project-93---95-chat-app.appspot.com",
    messagingSenderId: "192731928086",
    appId: "1:192731928086:web:af9d1422553f4d51174737"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"  
      });
      localStorage.setItem("room_name", room_name);
      window.location = "Kwitter_page.html";
}

function getData() {
      
      firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("room name is " + Room_names);
      roomRow = "<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id);' >#" + Room_names + "</div> <hr>"; 
      document.getElementById("output").innerHTML += roomRow;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "Kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}