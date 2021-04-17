function logout()
{
		console.log("Called logout")
	firebase.auth().signOut().then(() => {
		console.log("logout succesful")
	  // Sign-out successful.
	}).catch((error) => {
		console.log("error")
	  // An error happened.
	});
}
