// grab all vars

const form = document.getElementById('form')
const userName = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')


// isValidEmail () 

const isValidEmail = (email) => {
    const re = 
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}


//showError ()

const showError = (input, message) => {
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

//show success

const showSuccess = (input) => {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}



//add event to form

form.addEventListener('submit', (e) => {

    //for userName
    if(userName.value === '') {
        showError(userName, 'enter your username')
    }else {
        showSuccess(userName)
    }

    //for email
    if(email.value === '') {
        showError(email, 'enter your email')
    }else if (!isValidEmail(email.value)) {
        showError(email, 'enter valid email')
    }else {
        showSuccess(email)
    }

    //for password 
    if(password.value ===''){
        showError(password, 'enter password')
    }else {
        showSuccess(password)
    }
    // for password 2

    if(password2.value === ''){
        showError(password2, 'confirm password')
    }else {
        showSuccess(password2)
    }



    e.preventDefault()
})
