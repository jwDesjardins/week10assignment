document.getElementById('add-user-form').addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();
  
    // Get the name and email values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
  
    // Create a new row and cells
    var newRow = document.createElement('tr');
    var nameCell = document.createElement('td');
    var emailCell = document.createElement('td');
  
    // Set the text of the cells
    nameCell.textContent = name;
    emailCell.textContent = email;
  
    // Append the cells to the row
    newRow.appendChild(nameCell);
    newRow.appendChild(emailCell);
  
    // Append the row to the table
    document.getElementById('users-table').querySelector('tbody').appendChild(newRow);
  
    // Clear the input fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
  });
  