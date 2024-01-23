if(sessionStorage.getItem("username") == null){
    window.open("login.html", "_self");
}

function getUsername(){
    return sessionStorage.getItem("username")
}
function getUserId(){
    return sessionStorage.getItem("userid")
}

function clearSession(){
    sessionStorage.clear()
}