const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#password-error");
const confirmPassword = document.querySelector("#confirm-password");
const confirmPasswordError = document.querySelector("#confirm-password-error");
const gender1 = document.querySelector("#gender1");
const gender2 = document.querySelector("#gender2");
const genderError = document.querySelector("#gender-error");
const checkbox1 = document.querySelector("#cricket");
const checkbox2 = document.querySelector("#table-tennis");
const checkbox3 = document.querySelector("#football");
const checkboxError = document.querySelector("#hobby-error");
const remark = document.querySelector("#remarks");
const remarkError = document.querySelector("#remarks-error");
const city = document.querySelector("#city");
const cityError = document.querySelector("#city-error");

const validateName = () => {
  let errorMsg;
  let regex = new RegExp("^[A-Za-z ]*$");

  if (name.value.trim() === "") {
    errorMsg = "*Name is required";
    nameError.innerHTML = errorMsg;
    return false;
  } else if (!regex.test(name.value)) {
    errorMsg = "*Fname Should not have numbers";
    nameError.innerHTML = errorMsg;
    return false;
  } else {
    errorMsg = "";
    nameError.innerHTML = errorMsg;
    return true;
  }
};

const validateEmail = () => {
  let errorMsg;
  let regex = new RegExp(
    `([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|\[[\t -Z^-~]*])`
  );

  if (email.value.trim() === "") {
    errorMsg = "*Email is required";
    emailError.innerHTML = errorMsg;
    return false;
  } else if (!regex.test(email.value)) {
    errorMsg = "*Invalid email address";
    emailError.innerHTML = errorMsg;
    return false;
  } else {
    errorMsg = "";
    emailError.innerHTML = errorMsg;
    return true;
  }
};

const validatePassword = () => {
  let errorMsg;

  if (password.value.trim() === "") {
    errorMsg = "*Password is required";
    passwordError.innerHTML = errorMsg;
    return false;
  } else if (password.value.length < 8 || password.value.length > 20) {
    errorMsg = "*Password length should be min 8 and max 20 characters long";
    passwordError.innerHTML = errorMsg;
    return false;
  } else {
    errorMsg = "";
    passwordError.innerHTML = errorMsg;
    return true;
  }
};

const validateConfirmPassword = () => {
  let errorMsg;

  if (confirmPassword.value.trim() === "") {
    errorMsg = "*Confirm Password field is required";
    confirmPasswordError.innerHTML = errorMsg;
    return false;
  } else if (confirmPassword.value != password.value) {
    errorMsg = "*Confirm password did not matched password field";
    confirmPasswordError.innerHTML = errorMsg;
    return false;
  } else {
    errorMsg = "";
    confirmPasswordError.innerHTML = errorMsg;
    return true;
  }
};

const validateGender = () => {
  let errorMsg;

  if (!gender1.checked && !gender2.checked) {
    errorMsg = "*Gender field is required";
    genderError.innerHTML = errorMsg;
    return false;
  } else {
    errorMsg = "";
    genderError.innerHTML = errorMsg;
    return true;
  }
};

const validateHobby = () => {
  let errorMsg;

  if (!(checkbox1.checked || checkbox2.checked || checkbox3.checked)) {
    errorMsg = "*Hobby is required";
    checkboxError.innerHTML = errorMsg;
    return false;
  } else {
    errorMsg = "";
    checkboxError.innerHTML = errorMsg;
    return true;
  }
};

const validateRemark = () => {
  let errorMsg;

  if (remark.value.trim() === "") {
    errorMsg = "*Remarks field is required";
    remarkError.innerHTML = errorMsg;
    return false;
  } else if (remark.value.length > 20) {
    errorMsg = "*remark can only be max 20 characters long";
    remarkError.innerHTML = errorMsg;
    return false;
  } else {
    errorMsg = "";
    remarkError.innerHTML = errorMsg;
    return true;
  }
};

const validateCity = () => {
  let errorMsg;

  if (city.value.trim() === "") {
    errorMsg = "*City field is required";
    cityError.innerHTML = errorMsg;
    return false;
  } else {
    errorMsg = "";
    cityError.innerHTML = errorMsg;
    return true;
  }
};

const validateForm = () => {
  let nameValid = validateName();
  let emailValid = validateEmail();
  let passwordValid = validatePassword();
  let confirmValid = validateConfirmPassword();
  let genderValid = validateGender();
  let hobbyValid = validateHobby();
  let remarkValid = validateRemark();
  let cityValid = validateCity();
  return (
    nameValid &&
    emailValid &&
    passwordValid &&
    confirmValid &&
    genderValid &&
    hobbyValid &&
    remarkValid &&
    cityValid
  );
};

const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm()){
        console.log(e);
    }
}

name.addEventListener("keyup", validateName);
email.addEventListener("keyup", validateEmail);
password.addEventListener("keyup", validatePassword);
confirmPassword.addEventListener("keyup",validateConfirmPassword);
document
  .querySelectorAll(".chkHobby")
  .forEach((checkbox) => checkbox.addEventListener("change", validateHobby));
remark.addEventListener("keyup", validateRemark);
city.addEventListener("change", validateCity);

document.querySelector(".reset").addEventListener("click", () => {
  nameError.innerHTML = "";
  emailError.innerHTML = "";
  passwordError.innerHTML = "";
  confirmPasswordError.innerHTML = "";
  genderError.innerHTML = "";
  checkboxError.innerHTML = "";
  remarkError.innerHTML = "";
  cityError.innerHTML = "";
});
