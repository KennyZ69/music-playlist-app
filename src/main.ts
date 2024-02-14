import addLoginPage from "./loginPage";

function renderApp(): void{
    addLoginPage();
}
document.addEventListener('DOMContentLoaded', renderApp);