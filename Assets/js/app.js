document.addEventListener("DOMContentLoaded", function() {
    const savedData = localStorage.getItem("applicationData");
    if (savedData) {
        const applicationData = JSON.parse(savedData);
        

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

    event.preventDefault(); 
    const firstname = document.getElementById("first-name").value;
    const lastname = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const state = document.getElementById("state").value;
    
    const interest = document.getElementById("interest").value;

    const applicationData = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        address: address,
        state: state,
        interest: interest
    };

    localStorage.setItem("applicationData", JSON.stringify(applicationData));
    


    
    showConfirmationModal();
});

function showConfirmationModal () {
    const firstname = document.getElementById("first-name").value;
    const lastname = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const state = document.getElementById("state").value;
    const interest = document.getElementById("interest").value;
    
    document.getElementById("confirm-first-name").textContent = firstname;
    document.getElementById("confirm-last-name").textContent = lastname;
    document.getElementById("confirm-email").textContent = email;
    document.getElementById("confirm-phone").textContent = phone;
    document.getElementById("confirm-address").textContent = address;
    document.getElementById("confirm-state").textContent = state;
    document.getElementById("confirm-interest").textContent = interest;

    const confirmationModal = document.getElementById("confirmationModal");
    confirmationModal.style.display = "block";
}

document.getElementById("confirmSubmit").addEventListener("click", function () {
    const confirmationModal = document.getElementById("confirmationModal");
    confirmationModal.style.display = "none";

    const successModal = document.getElementById("modal");
    successModal.style.display = "block";

});

document.getElementById("cancel").addEventListener("click", function () {
    const confirmationModal = document.getElementById("confirmationModal");
    confirmationModal.style.display = "none";
});

document.getElementById("closeConfirmationModal").addEventListener("click", function () {
    const confirmationModal = document.getElementById("confirmationModal");
    confirmationModal.style.display = "none";
});

function showModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
}

document.getElementById("closeModal").addEventListener("click", function() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
});