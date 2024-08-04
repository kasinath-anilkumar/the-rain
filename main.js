const userName = ['admin', 'customer']
const userPassword = ['123', '111']

const login = () => {
    const userName = document.getElementById('username');
    const userPassword = document.getElementById('password');

    if (userName.value == 'admin') {
        if (userPassword.value == '123') {
            alert("Login Sucessfull")
            window.location.href = 'admin.html'
        }else{
            alert("wrong password")
        }
    }else if(userName.value == 'customer'){
        if (userPassword.value == '111') {
            window.location.href = 'customer.html'
        }else{
            alert("Wrong Password")
        }
    }else{
        alert("Invalid")
    }
    return false;
}

