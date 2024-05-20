function FirstName() {
    const firstName = document.getElementById('firstName').value;
    const firstNameError = document.getElementById('firstNameError');
    if (firstName.trim() === "") {
        firstNameError.textContent = "First name cannot be empty";
        return false;
    } else {
        firstNameError.textContent = "";
    }
    return true;
}

function LastName() {
    const lastName = document.getElementById('lastName').value;
    const lastNameError = document.getElementById('lastNameError');
    if (lastName.trim() === "") {
        lastNameError.textContent = "Last name cannot be empty";
        return false;
    } else {
        lastNameError.textContent = "";
    }
    return true;
}

function MobileNo() {
    const mobileNo = document.getElementById('mobileNo').value;
    const mobileNoError = document.getElementById('mobileNoError');
    // Example: simple validation for 10-digit phone number
    if(mobileNo.trim()==""){
        mobileNoError.textContent = "Mobile Number cannot be empty";
        return false;
    }
    else if (mobileNo.length!=10) {
        mobileNoError.textContent = "Enter a valid 10-digit phone number";
        return false;
    }
    else if(mobileNo.charAt(0)<'6' || mobileNo.charAt(0)>'9'){
        mobileNoError.textContent="Phone Number should start between the digits 6 and 9";
        return false;
    }
     else {
        mobileNoError.textContent = "";
    }
    return true;
}

function Password() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if(password.trim()==""){
        passwordError.textContent = "Password cannot be empty";
        return false;
    }
    else if (password.length <8 || password.length>15) {
        passwordError.textContent = "Password must be at least 8 characters long and a maximum of 15";
        return false;
    } else {
        passwordError.textContent = "";
    }
    return true;
}

function ConfirmPassword() {
    const password = document.getElementById('password').value;
    const cpassword = document.getElementById('cpassword').value;
    const cpasswordError = document.getElementById('cpasswordError');
    if(cpassword.trim()==""){
        cpasswordError.textContent = "Confirm Password cannot be empty";
        return false;
    }
    else if (password !== cpassword) {
        cpasswordError.textContent = "Passwords do not match";
        return false;
    } else {
        cpasswordError.textContent = "";
    }
    return true;
}

function finalValidation() {
    if (FirstName() && LastName() && MobileNo() && Password() && ConfirmPassword()) {
        // Here you can add the code to actually submit the form, e.g., form.submit()
        window.location.href="https://www.achieversit.com/"
        return true;
    }
    return false;
}