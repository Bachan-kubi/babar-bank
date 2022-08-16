// step- 1 add even handler 
let btn = document.getElementById('btn-submit');
btn.addEventListener('click', function(){
    // steop- 2 get email and password! 
    // alway remember to use ,value to get users inputs 
    const emailField = document.getElementById('email');
    let email = emailField.value; 
    const passwordField = document.getElementById('password');
    let password = passwordField.value;
    // console.log("Email:", email, "Password:", password)

    // ** Dont verify email and password in client side. 
    // step-3 Verify emaila and password
    if(email === 'bachankubi@gmail.com' && password === '12345'){
        // step- 4 shifting to main bank account. 
        window.location.href = 'bank.html';
    }else{
        alert('Invalid Users!');
    }
});