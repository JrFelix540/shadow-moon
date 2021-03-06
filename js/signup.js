// Multi-step form
let currentTab = 0;
const tabs = document.querySelectorAll(".tab");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

const showTab = (n) => {
    tabs[n].style.display = "block";

    if (n === 0) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "flex";
    }

    if (n === tabs.length - 1) {
        nextBtn.innerHTML = "Create Account";
        // nextBtn.type = "submit";
    } else {
        nextBtn.innerHTML = "Next";
        nextBtn.type = "button";
    }
};

const prevNext = (n) => {
    tabs[currentTab].style.display = "none";
    currentTab = currentTab + n;

    if (currentTab >= tabs.length) {
        document.querySelector("#registerForm").submit();
        console.log(`object`);
    }
    showTab(currentTab);
};

nextBtn &&
    nextBtn.addEventListener("click", (e) => {
        prevNext(1);
    });

prevBtn &&
    prevBtn.addEventListener("click", (e) => {
        prevNext(-1);
    });

showTab(currentTab);

// Strong/Weak Password checks
const passwordInput = document.querySelector("#password");
const passwordStrengthText = document.querySelector(
    ".text__password-strength",
);

// Contains atleast 8 characters
const weak = new RegExp("(?=.{8,})");
// Contains atleast one upper case letter, one lower case letter and (one number or one special char)
const medium = new RegExp(
    "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})",
);
// Contains atleast at least one upper case letter, one lower case letter ,one number AND one special char)
const strong = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
);

const testPassword = (value) => {
    let passwordStrength = {
        title: "",
        color: "",
    };

    if (strong.test(value)) {
        passwordStrength.title = `strong`;
        passwordStrength.color = `green`;
    } else if (medium.test(value)) {
        passwordStrength.title = `medium`;
        passwordStrength.color = `blue`;
    } else if (!weak.test(value)) {
        passwordStrength.title = `weak`;
        passwordStrength.color = `red`;
    } else {
        passwordStrength.title = `weak`;
        passwordStrength.color = `red`;
    }

    return passwordStrength;
};

passwordInput &&
    passwordInput.addEventListener("keyup", (e) => {
        e.preventDefault();
        const strength = testPassword(passwordInput.value);

        passwordStrengthText.innerHTML = strength.title;
        passwordStrengthText.style.color = strength.color;
    });

// Toggle show password

// Terms of service modal
const openTermsBtn = document.querySelector(`#openTermsBtn`);
const closeTermsBtn = document.querySelector(`#closeTermsBtn`);

const termsContainer = document.querySelector(`#termsModal`);

openTermsBtn &&
    openTermsBtn.addEventListener("click", () => {
        termsContainer.style.display = "block";
    });

closeTermsBtn &&
    closeTermsBtn.addEventListener("click", () => {
        termsContainer.style.display = "none";
    });

const openPrivacyBtn = document.querySelector(`#openPrivacyBtn`);
const closePrivacyBtn = document.querySelector(`#closePrivacyBtn`);

const privacyContainer = document.querySelector(`#privacyModal`);

openPrivacyBtn &&
    openPrivacyBtn.addEventListener(`click`, () => {
        privacyContainer.style.display = "block";
    });

closePrivacyBtn &&
    closePrivacyBtn.addEventListener(`click`, () => {
        privacyContainer.style.display = `none`;
    });
