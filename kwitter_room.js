
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAYG7dhDnNTqOsSVbrkA6_sNX_1nRvNcDg",
      authDomain: "kwitter-new-3b111.firebaseapp.com",
      databaseURL: "https://kwitter-new-3b111-default-rtdb.firebaseio.com",
      projectId: "kwitter-new-3b111",
      storageBucket: "kwitter-new-3b111.appspot.com",
      messagingSenderId: "539619596599",
      appId: "1:539619596599:web:702d42702e4975b16162b2",
      measurementId: "G-XLF7RH4Z0X"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name;
    function add_room(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id='"+Room_names+"' onclick='RedirectToRoom(this.id)'>"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function RedirectToRoom(name){
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}