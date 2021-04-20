function postData(){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://us-central1-testapp-5ea05.cloudfunctions.net/postUserData');
    xhr.setRequestHeader("Content-type", "application/json");
// Track the state changes of the request.
    let fname = document.getElementById('fnameinput').value;
    let lname = document.getElementById('lnameinput').value;
    let gen = document.getElementById('genderselect').value;
    let age = document.getElementById('ageinput').value;
    let activitylvl = document.getElementById('activityselect').value;
    let aim = document.getElementById('goalselect').value;

    xhr.send(JSON.stringify(
        {"fname": fname, "lname": lname, "gender": gen, "age": age, "activity" : activitylvl, "goal": aim}
    ));
}