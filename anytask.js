

// function redirectfunc(){
//     window.location ="file:///C:/Users/wwwhp/Desktop/New%20folder/AnyTask/login.html";
// }



function Redirect(){
    window.location.assign("login.html");
}

// for rediret select
function Redirect1(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("pd").value;
    if(email == null || email == "" && password == null ||  password == ""){
        alert("Please Fill the Form");
        return false;
    }
    else{
        window.location.assign("select.html");
        alert("Registration Successfully");
        return true;
    }    
}

// upload File
function upload(){
    var  file = document.getElementById("file5").value;
    // var btn = document.getElementById("btn2").value;

    if(file == null || file == ""){
        alert("Please choosen file");
        // file.focus();
        // return false;
    }
    
    else{
        alert("File upload successfully");
        // return true;
    }
}

// want to work

function Redirect2(){
    window.location.assign("project.html");
}

// for redirect skill
function Redirect3(){
    window.location.assign("skills.html");
}

// for redirect bid
function Redirect4(){
    window.location.assign("bid.html");
}

// sidenav bar

const openNav = () => {
    document.getElementById('sidenav').style.width = "350px";
}

const closeNav = () => {
    document.getElementById('sidenav').style.width = "0px";
}

