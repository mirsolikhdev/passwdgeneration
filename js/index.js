let input = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener('click', () => {
    input.value = GeneratePassword(16);
});

function GeneratePassword(length = 16){
    let chartset = 'ABCDEFGKLMNOPQRSTUVWYXZabcdefgklmnopqrstuvwyxz0123456789@#$%_';

    let password = '';

    for(let i = 0; i < length; ++i){
        let at = Math.floor(Math.random() * (chartset.length + 1));

        password += chartset.charAt(at);
    }
    return password;
}