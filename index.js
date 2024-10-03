document.querySelector('.registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const dob = document.querySelector('#dob').value;
    const terms = document.querySelector('#terms').checked;
    
    const entryTableBody = document.querySelector('#entry-table-body');
    
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${password}</td>
        <td>${dob}</td>
        <td>${terms}</td>
    `;
    
    entryTableBody.appendChild(newRow);
    
    // Clear the form
    document.querySelector('.registration-form').reset();
});
