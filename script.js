function validation() {
    let a = document.getElementById("password").value;

    let b = document.getElementById("cpass").value;
    //validating length of password
    if (a.length < 8) {
        document.getElementById("min_length").style = "color:red;"
    }
    else {
        document.getElementById("min_length").style = "color:green;"
    }
    //validating lowercase latters
    if (a.match((/[a-z]/))) {
        document.getElementById("lcase").style = "color:green;"
    }
    else {
        document.getElementById("lcase").style = "color:red;"
    }
    // validating uppercase latters
    if (a.match((/[A-Z]/))) {
        document.getElementById("ucase").style = "color:green;"
    }
    else {
        document.getElementById("ucase").style = "color:red;"
    }
    //validating special character
    if (a.match((/[!@#$%^&*.]/))) {
        document.getElementById("spchar").style = "color:green;"
    }
    else {
        document.getElementById("spchar").style = "color:red;"
    }

    //validating Numbers
    if (a.match((/[0-9]/))) {
        document.getElementById("number").style = "color:green;"
    }
    else {
        document.getElementById("number").style = "color:red;"
    }

    //validating conform password
    if (a != b) {
        document.getElementById("confirm_pass").style = "color:red;"
    }
    else {
        document.getElementById("confirm_pass").style = "color:green;"
    }


}