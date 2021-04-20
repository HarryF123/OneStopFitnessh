function register() {
    let email = document.getElementById('exampleInputEmail1').value;
    let password = document.getElementById('exampleInputPassword1').value;
/*
    let fname = document.getElementById('fnameinput').value;
    let lname = document.getElementById('lnameinput').value;
    let gen = document.getElementById('genderselect').value;
    let age = document.getElementById('ageinput').value;
    let activitylvl = document.getElementById('activityselect').value;
    let aim = document.getElementById('goalselect').value;
*/
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            console.log(user)
            // ...
        } else {
            // User is signed out
            // ...
            console.log("sign out")
        }
    });

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage, errorCode);
        });
}


