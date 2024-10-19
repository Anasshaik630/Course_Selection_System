function login() {
    const regdNo = document.getElementById('regd-no').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can expand this)
    if (regdNo === "" || password === "") {
        alert("Please enter both Registration No. and Password.");
    } else {
        // Here, you would send the credentials to the server for validation.
        console.log("Logging in with:", regdNo, password);
        alert("Login successful (dummy response).");
    }
}