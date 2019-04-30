$(document).ready(function(){

 // initializing firebase
    var config = {
        apiKey: "AIzaSyAa_s4kLoatP0lhHzI1I8ifkwZpWDUhZbA",
        authDomain: "train-scheduler-e0b80.firebaseapp.com",
        databaseURL: "https://train-scheduler-e0b80.firebaseio.com",
        projectId: "train-scheduler-e0b80",
        storageBucket: "train-scheduler-e0b80.appspot.com",
        messagingSenderId: "358373506813"
        };
        firebase.initializeApp(config);


    var database = firebase.database();

 // event listener on click to add trains
    $("#addTrain").on("click", function(event) {
        event.preventDefault();

 // grabs and stores user input
        var nameInput = $("#trainName").val().trim();
        var destinationInput = $("#trainDestination").val().trim();
        var timeInput = $("#trainTime").val().trim();
        var freqInput = $("#trainFreq").val().trim()

// creating object to hold new train data
        var newTrain = {
            name: nameInput,
            destination: destinationInput,
            time: timeInput,
            freq: freqInput
        };

// pushes new train data to firebase
        database.ref().push(newTrain);

// log all values to console
        console.log(newTrain.name);
        console.log(newTrain.destination);
        console.log(newTrain.time);
        console.log(newTrain.freq);


// Clear all values from boxes
        $("#trainName").val("");
        $("#trainDestination").val("");
        $("#trainTime").val("");
        $("#trainFreq").val("");
    });


// Firebase event to add to database and to html row 

    database.ref().on("child_added", function(childSnapshot) {
        console.log(childSnapshot.val());

//  Store snapshots into a variable
        var trainName = childsnapshot.val().name;
        var trainDestination = childshapshot.val().destination;
        var trainTime = childsnapshot.val().time;
        var trainFreq = childsnapshot.val().freq;

// Console log train name
        console.log(trainName);
        console.log(trainDestination);
        console.log(trainTime);
        console.log(trainFreq);

    });











})