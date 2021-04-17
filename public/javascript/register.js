function register()
{
    let email = document.getElementById('exampleInputEmail1').value
    let password = document.getElementById('exampleInputPassword1').value
		
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



function login()
{
    let email = document.getElementById('exampleInputEmail1').value
    let password = document.getElementById('exampleInputPassword1').value
	
	console.log("hello")
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
	
	firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
			console.log(userCredential)
            // Signed in
            var user = userCredential.user;
            // If successful redirect to a secure page
            window.location.href = "/legs.html"
            console.log(user);
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
}
