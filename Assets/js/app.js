document.addEventListener("DOMContentLoaded", function() {
    const savedData = localStorage.getItem("applicationData");
    if (savedData) {
        const applicationData = JSON.parse(savedData);
        
        // Populate form fields with saved data
           document.getElementById("first-name").value = applicationData.firstname || '';
           document.getElementById("last-name").value = applicationData.lastname || '';
           document.getElementById("email").value = applicationData.email || '';
           document.getElementById("phone").value = applicationData.phone || '';
           document.getElementById("address").value = applicationData.address || '';
           document.getElementById("state").value = applicationData.state || '';
           document.getElementById("interest").value = applicationData.interest || '';
       }
   });
        
document.getElementById("applicationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting the default way

    // Get form data
    const firstname = document.getElementById("first-name").value;
    const lastname = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const state = document.getElementById("state").value;
    
    const interest = document.getElementById("interest").value;


    // Save form data to localStorage
    const applicationData = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        address: address,
        state: state
    };

    localStorage.setItem("applicationData", JSON.stringify(applicationData));
    

    // Show the modal
    showModal();
});

// Show Modal
function showModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
}

// Close Modal
document.getElementById("closeModal").addEventListener("click", function() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
});