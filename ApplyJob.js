function validateApplyForm() {
    const requiredFields = ["first_name", "last_name", "email", "phone", "address", "city", "state", "zip", "country", "edu_level", "edu_type", "resume"];
    let valid = true;
    requiredFields.forEach(field => {
        const value = document.getElementById(field).value;
        if (!value) {
            alert(`Please fill out the ${field.replace('_', ' ')} field.`);
            valid = false;
        }
    });

    const zip = document.getElementById("zip").value;
    if (isNaN(zip)) {
        alert("Zip code must be a number.");
        valid = false;
    }

    const email = document.getElementById("email").value;
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        valid = false;
    }

    return valid;
}

function toggleEmployerFields() {
    const checkbox = document.getElementById("employed");
    const employerFields = document.getElementById("employer_fields");
    employerFields.style.display = checkbox.checked ? "block" : "none";
}
