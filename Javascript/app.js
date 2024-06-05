function validateForm() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const mobileNo = document.getElementById('mobileNo').value.trim();
    const password = document.getElementById('password').value.trim();
    const cpassword = document.getElementById('cpassword').value.trim();

    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const mobileNoError = document.getElementById('mobileNoError');
    const passwordError = document.getElementById('passwordError');
    const cpasswordError = document.getElementById('cpasswordError');

    let isValid = true;

    if (firstName === "") {
        firstNameError.textContent = "First name cannot be empty";
        isValid = false;
    } else if (!isNaN(firstName)) {
        firstNameError.textContent = "Enter only alphabets";
        isValid = false;
    } else {
        firstNameError.textContent = "";
    }

    if (lastName === "") {
        lastNameError.textContent = "Last name cannot be empty";
        isValid = false;
    } else if (!isNaN(lastName)) {
        lastNameError.textContent = "Enter only alphabets";
        isValid = false;
    } else {
        lastNameError.textContent = "";
    }

    if (mobileNo === "") {
        mobileNoError.textContent = "Mobile Number cannot be empty";
        isValid = false;
    } else if (mobileNo.length != 10) {
        mobileNoError.textContent = "Enter a valid 10-digit phone number";
        isValid = false;
    } else if (mobileNo.charAt(0) < '6' || mobileNo.charAt(0) > '9') {
        mobileNoError.textContent = "Phone Number should start between the digits 6 and 9";
        isValid = false;
    } else {
        mobileNoError.textContent = "";
        document.getElementById('mobiletrue').textContent = "You have entered correct format of mobile number";
    }

    if (password === "") {
        passwordError.textContent = "Password cannot be empty";
        isValid = false;
    } else if (password.length < 8 || password.length > 15) {
        passwordError.textContent = "Password must be at least 8 characters long and a maximum of 15";
        isValid = false;
    } else {
        passwordError.textContent = "";
        document.getElementById('passwordtrue').textContent = "You have entered correct format of password";
    }

    if (cpassword === "") {
        cpasswordError.textContent = "Confirm Password cannot be empty";
        isValid = false;
    } else if (password !== cpassword) {
        cpasswordError.textContent = "Passwords do not match";
        isValid = false;
    } else {
        cpasswordError.textContent = "";
        document.getElementById('cpasswordtrue').textContent = "Passwords are matched";
    }

    if (isValid) {
        window.location.href = "dummy.html";
    }

    return isValid;

}


