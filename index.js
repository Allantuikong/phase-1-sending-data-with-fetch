// Add your code here
function submitData(userName, userEmail) {
  const userData = {
    name: "Steve",
    email: "steve@steve.com",
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userData),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      const newId = object.id;
      const idElement = document.createElement("p");
      idElement.textContent = `New ID: ${newId}`;
      document.body.appendChild(idElement);
    })
    .catch(function (error) {
      const errorElement = document.createElement("p");
      errorElement.textContent = ` Error: ${error.message}`;
      document.body.appendChild(errorElement);
    });
}
