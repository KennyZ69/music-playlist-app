
export default function addLoginPage(): void{
    // Create the div to append it on
    // const loginContainer = document.createElement('div');
    // loginContainer.classList.toggle('loginDiv');

    const loginTitle = document.createElement('h2');
    loginTitle.classList.toggle('loginTitle');
    loginTitle.textContent = 'Please login.'

    // Create form element
    const form = document.createElement('form');
    form.action = 'your_login_script.php'; // Replace with your login script URL
    form.method = 'post';


    // Create input elements
    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.name = 'username';
    usernameInput.placeholder = 'Username';
    usernameInput.required = true;

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.name = 'password';
    passwordInput.placeholder = 'Password';
    passwordInput.required = true;

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Login';

    // Append input elements to form
    form.appendChild(usernameInput);
    form.appendChild(passwordInput);
    form.appendChild(submitButton);

    // Get container element and append form
    const container = document.getElementById('loginContainer');
    if (container) {
        container.append(loginTitle, form);
    } else {
        console.error('Container element not found.');
    }
}
