// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emilField = document.getElementById('user-email');
    const email = emilField.value;
    // step-3: get password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password )

    // DENGER: DO NOT VERIFY EMAIL email paddword on the client side
    // step-4: verify email and password
    if(email === 'abba@gmail.com' && password === '1234'){
          window.location.href = 'bank.html';
        }
        else{
            alert('tui password vule gesos!! toke ami teijjo sontan gosona korlam')
    }
})