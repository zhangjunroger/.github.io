// Firebase configuration  
const firebaseConfig = {
    apiKey: "AIzaSyA8Ns_ggqXXhvF9YYtGZfEpAsL4_IShGbg",
    authDomain: "sutaiorder.firebaseapp.com",
    projectId: "sutaiorder",
    storageBucket: "sutaiorder.appspot.com",
    messagingSenderId: "148337219750",
    appId: "1:148337219750:web:0108bec95c205ad67afc67",
    measurementId: "G-V4LH4WPJLR"
  };

// Initialize Firebase  
firebase.initializeApp(firebaseConfig);  
const auth = firebase.auth();  
const db = firebase.firestore();  

// Register function  
function register() {  
    const email = document.getElementById('email').value;  
    const password = document.getElementById('password').value;  
    auth.createUserWithEmailAndPassword(email, password)  
        .then(userCredential => {  
            alert('Registration successful');  
            document.getElementById('auth').style.display = 'none';  
            document.getElementById('booking').style.display = 'block';  
        })  
        .catch(error => {  
            alert(error.message);  
        });  
}  

// Login function  
function login() {  
    const email = document.getElementById('email').value;  
    const password = document.getElementById('password').value;  
    auth.signInWithEmailAndPassword(email, password)  
        .then(userCredential => {  
            alert('Login successful');  
            document.getElementById('auth').style.display = 'none';  
            document.getElementById('booking').style.display = 'block';  
        })  
        .catch(error => {  
            alert(error.message);  
        });  
}  

// Book classroom function  
function bookClassroom() {  
    const date = document.getElementById('date').value;  
    const period = document.getElementById('period').value;  
    const classroom = document.getElementById('classroom').value;  
    const user = auth.currentUser;  

    if (user) {  
        db.collection('bookings').add({  
            userId: user.uid,  
            date: date,  
            period: period,  
            classroom: classroom  
        })  
        .then(() => {  
            alert('Classroom booked successfully');  
        })  
        .catch(error => {  
            alert(error.message);  
        });  
    } else {  
        alert('Please login first');  
    }  
}