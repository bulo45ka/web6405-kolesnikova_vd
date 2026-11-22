class UserFormData {
    constructor(login, email, password, agreement) {
        this.login = login;
        this.email = email;
        this.password = password;
        this.agreement = agreement;
    }

    printFormatted() {
        console.log("данные пользователя");
        console.log(`логин: ${this.login}`);
        console.log(`email: ${this.email}`);
        console.log(`пароль: ${this.password}`);
        console.log(`согласие на обработку: ${this.agreement ? "да" : "нет"}`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const authForm = document.getElementById("auth-form");

    if (authForm) {
        authForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const login = document.getElementById("login").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const agreement = document.getElementById("agreement").checked;

            const user = new UserFormData(login, email, password, agreement);
            user.printFormatted();
            
            authForm.reset();
        });
    }
});