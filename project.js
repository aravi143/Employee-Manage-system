const tbody = document.getElementById("tbody");

const popup = document.querySelector(".popup");

const form = document.getElementById("form");

let employeeId = 1; 

function addEmployee(employeeObj) {
    
    const tr = document.createElement("tr");
    

    const employeeIdCell = document.createElement("td");
    employeeIdCell.innerText = employeeId++; // 1
    

    tr.appendChild(employeeIdCell);

    for (let key in employeeObj) {
        const cell = document.createElement("td");
        cell.innerText = employeeObj[key];
        
        tr.appendChild(cell);
    }

   
    const actionsCell = document.createElement("td");
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"
    const editButton = document.createElement("button")
    editButton.innerText = "Edit";

    deleteButton.addEventListener("click", deleteRecord);
    editButton.addEventListener("click", editRecord);

    actionsCell.append(deleteButton, editButton);

    tr.appendChild(actionsCell);

    tbody.appendChild(tr);
}

function togglePopup() {
    
    if (popup.style.display === "none") {
        popup.style.display = "flex";
        form.phoneNumber.value = 3983033030;
    }
    else {
        popup.style.display = "none";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let employee = {
        name: form.name.value,
        role: form.role.value,
        salary: form.salary.value,
        phoneNumber: form.phoneNumber.value,
        email: form.email.value,
        companyName: form.companyName.value
    }
    addEmployee(employee);
    form.reset();
    togglePopup();
})


function deleteRecord(e) {
    
    let tr = e.target.parentNode.parentNode;
    tr.remove();
}

function editRecord(e) {
    
    console.log(e.target);

    
}