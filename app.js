// Dummy data
let employees = [
    { id: 101, name: "John Doe", salary: 50000.0 },
    { id: 102, name: "Jane Smith", salary: 60000.0 }
];

// Function to display employees
function displayEmployees() {
    const tableBody = document.getElementById("employee-table-body");
    tableBody.innerHTML = "";

    employees.forEach(employee => {
        const row = tableBody.insertRow();
        row.innerHTML = `<td>${employee.id}</td>
                         <td>${employee.name}</td>
                         <td>${employee.salary}</td>
                         <td><button onclick="deleteEmployee(${employee.id})">Delete</button></td>`;
    });
}

// Function to add employee
function addEmployee() {
    const id = parseInt(document.getElementById("employee-id").value);
    const name = document.getElementById("employee-name").value;
    const salary = parseFloat(document.getElementById("employee-salary").value);

    if (!isNaN(id) && name && !isNaN(salary)) {
        employees.push({ id, name, salary });
        displayEmployees();
    } else {
        alert("Invalid input. Please enter valid values.");
    }
}

// Function to delete employee
function deleteEmployee(id) {
    const index = employees.findIndex(employee => employee.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
        displayEmployees();
    } else {
        alert("Employee not found.");
    }
}

// Initial display
displayEmployees();
