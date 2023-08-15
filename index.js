document.querySelector('#login-btn').addEventListener('click', function(){
    const userMail = document.querySelector('#login-email');
    const email = userMail.value ;

    const userPassword = document.querySelector('#login-password');
    const password = userPassword.value;

    if(email === 'naym@gmail.com' && password === 'naym' ){
        window.location.href = 'calculator.html'
    }else{
        alert('Pleace provide me an valid id and password, Thank You.')
    }
})