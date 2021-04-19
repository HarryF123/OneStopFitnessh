const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});

admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
//exports.helloWorld = functions.https.onRequest((request, response) => {
 //functions.logger.info("Hello logs!", {structuredData: true});
//response.send("Hello from Firebase!");
//});
/*exports.postAge=functions.https.onRequest((request,response)=>{
	cors(request, response, () => {
	return admin.firestore().collection('age').add(request.body).then(()=>{
		response.send("Saved in the database");
	});
	});
});

exports.getAge = functions.https.onRequest((request,response)=>{
	cors(request, response, () => {
	let myData = []
	return admin.firestore().collection('age').get().then((snapshot)=>{
		if(snapshot.empty){
			console.log('No matching documents.');
			response.send('No data in database');
			return;
		}
		
		snapshot.forEach(doc => {
			myData.push(doc.data());
	});
	
		response.send(myData);
		
	})
});	
});*/
exports.regUserData=functions.https.onRequest((request,response)=>{
    cors(request, response, () => {
        return admin.firestore().collection('users').add(request.body).then(()=>{
            response.send("Saved in the database");
        });
    });
});

exports.getUserdata = functions.https.onRequest((request,response)=>{
    cors(request,response, () => {
        let mydata = []
        return admin.firestore().collection('users').get().then((snapshot) =>{
            if(snapshot.empty) {
                console.log("No matching user");
                response.send("No user data");
                return
            }
            snapshot.forEach(doc => {
                myData.push(doc.data());
        });
            response.send(myData);
    });
});

exports.authorizedendpoint = functions.https.onRequest((request, response) => {
cors(request, response, () => {

        console.log('Check if request is authorized with Firebase ID token');
        if ((!request.headers.authorization || !request.headers.authorization.startsWith('Bearer '))) {
            console.error('No Firebase ID token was passed as a Bearer token in the Authorization header.',
                'Make sure you authorize your request by providing the following HTTP header:',
                'Authorization: Bearer <Firebase ID Token>');
            response.status(403).send('Unauthorized');
            return;
        }
        let idToken;
        if (request.headers.authorization && request.headers.authorization.startsWith('Bearer ')) {
            console.log('Found "Authorization" header');
            // Read the ID Token from the Authorization header.
            idToken = request.headers.authorization.split('Bearer ')[1];
        } else {
            // No cookie
            response.status(403).send('Unauthorized');
            return;
        }

        try {
            const decodedIdToken = admin.auth().verifyIdToken(idToken).then((token) => {
                console.log('ID Token correctly decoded', token);
                response.send("Welcome to the secure section " + token);
            });
        } catch (error) {
            console.error('Error while verifying Firebase ID token:', error);
            response.status(403).send('Unauthorized');
            return;
        }
    });
});
