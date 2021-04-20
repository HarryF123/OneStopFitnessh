function register() {
    let email = document.getElementById('exampleInputEmail1').value;
    let password = document.getElementById('exampleInputPassword1').value;

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

    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    let firstname = document.getElementById('fnameinput').value;
    let lastname = document.getElementById('lnameinput').value;
    let sex = document.getElementById('genderselect').value;
    let age = document.getElementById('ageinput').value;
    let aim = document.getElementById('goalinput').value;
    let activitylvl = document.getElementById('activityinput').value;

    postData('https://us-central1-testapp-5ea05.cloudfunctions.net/postUserData', { fname: firstname, lname: lastname, gender: sex, age: age, goal: aim, activity: activitylvl})
        .then(data => {
            console.log(data); // JSON data parsed by `data.json()` call
        });
}


