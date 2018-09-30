var user = {firstname: 'Joe Bloggs', hobby: 'golf', profile: 'I like coding', gender: 'male', dob: '12/12/1917'};
var numberOfUsers = 0;
const MAX_NUMBER_OF_USERS = 10;

//Event registration
window.onload = function () {
    document.getElementById('users').style = "visibility:hidden";
    loadDataFromCloud();
};

function createuser() {

    user.firstname = document.getElementById('firstname').value;
    user.dob = document.getElementById('dateofbirth').value;
    user.gender = document.querySelector('input[name="gender"]:checked').value;
    user.hobby = document.getElementById("hobby").value;
    user.bio = document.getElementById('bio').value;
    user.dob = document.getElementById('dateofbirth').value;

}

function processForm() {
    createuser();
    createTableRow();
    save();
    document.getElementById('users').style = "visibility:visible";
}

function save() {
    if (localStorage !== undefined) {
        var key = "user" + numberOfUsers;
        localStorage.setItem(key, JSON.stringify(user));
    }
}


//How to filter an array using a callback function
function searchByName(q) {
    return loadData().filter(e => e.firstname === q);
}

function createTd(value) {
    var td = document.createElement("td");
    td.innerText = value;
    return td;
}

//How can you get all data from local storage
function loadData() {
    //Get all data from local storage
    var users = [];
    for (var i = 1; i < MAX_NUMBER_OF_USERS; i++) {
        users.push(JSON.Parse(localStorage.getItem('user' + i)));
    }
    return users;
}

function createTableRow() {
    if (numberOfUsers <= localStorage.length) {
        //Get the data from local storage
        var dbuser = loadData();
        var tbody = document.getElementById("userdatabody");
        for (var i = 0; i < dbuser.length; i++) {
            var tr = document.createElement("tr");

            tr.insertBefore(createTd(dbuser[i].firstname), null);
            tr.insertBefore(createTd(dbuser[i].gender), null);
            tr.insertBefore(createTd(dbuser[i].hobby), null);
            tr.insertBefore(createTd(dbuser[i].dob), null);
            tr.insertBefore(createTd(dbuser[i].profile), null);
            tbody.insertBefore(tr, null);
        }

    } else {
        alert("You have created the maximum number of users allowed");
    }
    numberOfUsers++;
}

document.getElementById("search").oninput = function (evt) {
    var q = evt.target.value;
    searchByName(q);

};



