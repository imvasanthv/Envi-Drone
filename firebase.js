// Import and configure Firebase
// Make sure to include your Firebase SDK script in the HTML file before this script


  const firebaseConfig = {
    apiKey: "AIzaSyA7ewbKa89A1xXCrASAzqmoXeNptgWj480",
    authDomain: "envi-drone.firebaseapp.com",
    databaseURL: "https://envi-drone-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "envi-drone",
    storageBucket: "envi-drone.firebasestorage.app",
    messagingSenderId: "1086250677742",
    appId: "1:1086250677742:web:18787eec846d23bdea8aff",
    measurementId: "G-JHY839YBMC"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference to the Firebase Realtime Database
  const database = firebase.database();
  
  // References to individual sensor values
  const humidityRef = database.ref('sensorData/humidity');
  const methaneRef = database.ref('sensorData/methane');
  const temperatureRef = database.ref('sensorData/temperature');
  
  // Function to update the humidity value on the webpage
  humidityRef.on('value', (snapshot) => {
    const humidityValue = snapshot.val();
    document.getElementById('humidity').innerText = `${humidityValue} %`;
  });
  
  // Function to update the methane value on the webpage
  methaneRef.on('value', (snapshot) => {
    const methaneValue = snapshot.val();
    document.getElementById('methane').innerText = `${methaneValue} ppm`;
  });
  
  // Function to update the temperature value on the webpage
  temperatureRef.on('value', (snapshot) => {
    const temperatureValue = snapshot.val();
    document.getElementById('temperature').innerText = `${temperatureValue} °C`;
  });
  