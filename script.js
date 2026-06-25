const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const showIcon = document.getElementById("showIcon");
const hideIcon = document.getElementById("hideIcon");

togglePassword.addEventListener("click", () => {
    const isPasswordHidden = passwordInput.type === "password";

    passwordInput.type = isPasswordHidden ? "text" : "password";

    showIcon.classList.toggle("hidden", isPasswordHidden);
    hideIcon.classList.toggle("hidden", !isPasswordHidden);

    togglePassword.setAttribute(
        "aria-label",
        isPasswordHidden ? "Hide password" : "Show password"
    );
});