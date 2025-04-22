document.getElementById("employeeForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const position = document.getElementById("position").value;
  
    document.getElementById("response").innerText =
      `Employee ${name} (${position}) added successfully!`;
  });
  