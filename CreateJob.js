document.addEventListener('DOMContentLoaded', function() {
    const openingDateInput = document.getElementById('opening_date');
    const today = new Date().toISOString().split('T')[0];
    openingDateInput.value = today;
});

function validateJobForm() {
    const title = document.getElementById("title").value;
    const type = document.getElementById("type").value;
    const department = document.getElementById("department").value;
    const country = document.getElementById("country").value;
    const description = document.getElementById("description").value;
    const openingDate = new Date(document.getElementById("opening_date").value);
    const today = new Date();

    if (!title || !type || !department || !country || !description) {
        alert("Please fill out all required fields.");
        return false;
    }
    if (openingDate > today) {
        alert("Opening date cannot be in the future.");
        return false;
    }
    return true;
}
