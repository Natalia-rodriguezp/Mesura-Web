
const logged_in = document.querySelectorAll('#logged-in');
const logged_out = document.querySelectorAll('#logged-out');

console.log(logged_out);
console.log(logged_in);

export const loginCheck = user => {
    if (user) {
        logged_in.forEach(link => link.style.display = 'none');
        logged_out.forEach(link => link.style.display = 'block');
    }
    else{
        logged_in.forEach(link => link.style.display = 'block');
        logged_out.forEach(link => link.style.display = 'none');
    }
}