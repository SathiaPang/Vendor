if(sessionStorage.getItem("username") == null){
    window.open("login.html", "_self");
}

function getUsername(){
    return sessionStorage.getItem("username")
}

function clearSession(){
    sessionStorage.clear()
}