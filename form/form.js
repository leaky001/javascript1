//This object contains usernames as keys and their corresponding email and password  as values:






const cohortLogin = {
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

// This login function is called when we want to try to log in.

function login() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMessage = document.getElementById("errorMessage");

    errorMessage.textContent = ""; 

    // If the email or password is empty it shows an  all fields are not requried

    if (!email || !password) {
        errorMessage.textContent = "All fields are  required.";
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long.";
        return;
    }

    

    for (let cohort in cohortLogin) {
        if (cohortLogin[cohort].email === email && cohortLogin[cohort].password === password) {
            alert(`Hi ${email}, You are now logged in!`);
            
            
            
        }
    }

    if (!cohortFound) {
        errorMessage.textContent = "Invalid email and password.";
    }
}
