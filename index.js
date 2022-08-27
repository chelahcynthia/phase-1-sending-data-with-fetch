// Add your code here
function submitData(name,email) {
    let formData = {
        name : name,
        email : email
     };
     const configurationObject = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify(formData),

     };
      return fetch("http://localhost:3000/users", configurationObject)
     .then(function(response) {
        return response.json()
     })
     .then(formData => {
        let id = formData["id"]
        let body = document.querySelector("body")
        body.innerHTML = id;
     })
     .catch(function (error) {
        alert("Unauthorized Access");
        document.body.innerHTML = error.message
     });

}
submitData("Chelah", "chelangat")
