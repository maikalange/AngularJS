var users = [];
function loadDataFromCloud() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            users = JSON.parse(xhr.responseText);
            bindNames();
        }
    };
    xhr.open("GET", "json/users.json", true);
    xhr.send();
}

window.onload = () => {
    loadDataFromCloud();
};

function bindNames() {
    //Get the userlist and add options to it
    var select = document.getElementById('userlist');
//    //Type 1
//    select.addEventListener('change', (event) => {
//        bindTemplate(event.target.value);
//    });
    //Type 2
    select.onchange = (event) => {
        bindTemplate(event.target.value);
    };
    //create an option element
    for (var i = 0; i < users.length; i++) {
        var option = new Option(users[i].name, users[i].name, false);
        select.insertBefore(option, null);
    }
}


function search(searchterm){
   return  users.filter(function(e){
        return searchterm===e.name;
    });
}

function bindTemplate(user){
    var selected  = search(user);
    document.querySelector('#name').innerText= selected[0].name;
    document.querySelector('#profile').innerText= selected[0].profile;
    document.querySelector('#dob').innerText= selected[0].dob;
    document.querySelector('#gender').innerText= selected[0].gender;
    document.querySelector('#hobby').innerText= selected[0].hobby;
}

