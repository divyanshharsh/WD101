// Function to load entries from localStorage and populate the table
function loadEntries() {
    const entries = JSON.parse(localStorage.getItem('entries')) || [];

    const entryTableBody = document.querySelector('#entry-table-body');
    entryTableBody.innerHTML = ''; // Clear the table before populating it

    entries.forEach(entry => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${entry.name}</td>
            <td>${entry.email}</td>
            <td>${entry.password}</td>
            <td>${entry.dob}</td>
            <td>${entry.terms}</td>
        `;
        entryTableBody.appendChild(newRow);
    });
}

// Function to validate if the user's age is between 18 and 55
function isAgeValid(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        return age - 1; // Correct the age if the birth date hasn't occurred yet this year
    }
    return age;
}

document.querySelector('.registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const dob = document.querySelector('#dob').value;
    const terms = document.querySelector('#terms').checked;

    // Check if the age is between 18 and 55
    const age = isAgeValid(dob);
    if (age < 18 || age > 55) {
        alert("You must be between 18 and 55 years old to register.");
        return;
    }

    const newEntry = { name, email, password, dob, terms };

    // Get existing entries from localStorage, or initialize an empty array if none exist
    const entries = JSON.parse(localStorage.getItem('entries')) || [];

    // Add the new entry to the entries array
    entries.push(newEntry);

    // Save the updated entries array back to localStorage
    localStorage.setItem('entries', JSON.stringify(entries));

    // Reload the entries into the table
    loadEntries();

    // Clear the form
    document.querySelector('.registration-form').reset();
});

// Load entries when the page is loaded
window.onload = loadEntries;
