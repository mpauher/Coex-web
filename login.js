function login(){
    let email = document.getElementById("emaillogin").value;
    let password = document.getElementById("passwordlogin").value;

    if (email== "paula@gmail.com" && password=="paula"){
        console.log("está bien :D")
        localStorage.setItem("session",true)
        location.reload();
    }

    console.log(email,password)
}