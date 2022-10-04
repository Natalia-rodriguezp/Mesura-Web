const singUpForm = document.querySelector('#signup-form')

singUpForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = singUpForm['signup-email'].value
    const password = singUpForm['signup-password'].value


    console.log(email, password)
})

console.log(singUpForm)