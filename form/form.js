const cohortCredentials = {
    "muiz": { email: "Dev@muiz.com", password: "muizpass" },
    "kabir": { email: "Dev@kabir.com", password: "kabirpass" },
    "ridwan": { email: "Dev@ridwan.com", password: "ridwanpass" },
    "Abdullah": { email: "Dev@abdullah.com", password: "abdullahpass" },
    "lateefat": { email: "Dev@lateefat.com", password: "lateefatpass" },
    "idress": { email: "Dev@idrees.com", password: "idresspass" },
    "dollpeey": { email: "Dev@dollypee.com", password: "dollypass" },
    "damilare": { email: "Dev@damilare.com", password: "damilarepass" },
    "feranmi": { email: "Dev@feranmi.com", password: "feranmipass" }
};

function login() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMessage = document.getElementById("errorMessage");

    errorMessage.textContent = ""; 

    if (!email || !password) {
        errorMessage.textContent = "All fields are required.";
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long.";
        return;
    }

    let userFound = false;

    for (let cohort in cohortCredentials) {
        if (cohortCredentials[cohort].email === email && cohortCredentials[cohort].password === password) {
            alert(`Hi ${email}, You are now logged in!`);
            userFound = true;
            break;
        }
    }

    if (!userFound) {
        errorMessage.textContent = "Invalid email or password.";
    }
}
