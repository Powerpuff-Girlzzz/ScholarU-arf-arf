const step1 = document.querySelector(".step1");
const step2 = document.querySelector(".step2");
const step3 = document.querySelector(".step3");
const emailAddress = document.getElementById("emailAddress");
const verifyEmail = document.getElementById("verifyEmail");
const inputs = document.querySelectorAll(".otp-group input");
const nextButton = document.querySelector(".nextButton");
const verifyButton = document.querySelector(".verifyButton");

const serviceID = "service_4b46oq5";
const templateID = "template_ec6demn";

let OTP = "";

window.addEventListener("load", () => {
    emailjs.init("08roLDQA67ahRA3jN");
    step2.style.display = 'none';
    step3.style.display = 'none';
    nextButton.classList.add("disable");
    verifyButton.classList.add("disable");
});

const validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/;

    if (re.test(email)) {
        nextButton.classList.remove("disable");
    }
    else {
        nextButton.classList.add("disable");
    }
};

const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000);
};

inputs.forEach((input) => {
    input.addEventListener("keyup", function (e) {
        if (this.value.length >= 1) {
            e.target.value = e.target.value.substr(0, 1);
        }

        if (inputs[0].value != "" && inputs[1].value != "" && inputs[2].value != "" && inputs[3].value != "") {
            verifyButton.classList.remove("disable");
        }
        else {
            verifyButton.classList.add("disable");
        }
    })
})

nextButton.addEventListener("click", () => {
    OTP = generateOTP();

    nextButton.innerHTML = "&#9889; Sending...";

    let templateParameter = {
        from_name: "ScholarU",
        OTP: OTP,
        message: "Please see the attached message",
        reply_to: emailAddress.value,
    };

    emailjs.send(serviceID, templateID, templateParameter).then(
        (res) => {
            console.log(res);
            nextButton.innerHTML = "Next →";
            step1.style.display = "none";
            step2.style.display = "block";
            step3.style.display = "none";
        }, (err) => {
            console.log(err)
        });
});

verifyButton.addEventListener("click", () => {
    let values = "";
    inputs.forEach((input) => {
        console.log(input.value);
        values += input.value;
    })
    if (OTP == values) {
        step1.style.display = "none";
        step2.style.display = "none";
        step3.style.display = "block";
    }
    else {
        verifyButton.classList.add("error-shake");

        setTimeout(() => {
            verifyButton.classList.remove("error-shake");
        }, 1000);
    }
});

function changeEmail() {
    step1.style.display = "block";
    step2.style.display = "none";
    step3.style.display = "none";
}