
document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const submitButton = document.querySelector("#contact-form button[type='submit']");
    const validationName = document.getElementById("validation-name");
    const validationEmail = document.getElementById("validation-email");
  
    // Success and error messages as modals
    const successModal = new bootstrap.Modal(document.getElementById("success-modal"));
    const errorModal = new bootstrap.Modal(document.getElementById("error-modal"));
  
    function validateName(name) {
      return /^[a-zA-Z]+$/.test(name); // Only alphabets allowed
    }
  
    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Basic email format validation
    }
  
    // Function to display a success message in the modal
    function showSuccessMessage(message) {
      const successMessage = document.getElementById("success-message");
      successMessage.textContent = message;
      successModal.show();
    }
  
    // Function to display an error message in the modal
    function showErrorMessage(message) {
      const errorMessage = document.getElementById("error-message");
      errorMessage.textContent = message;
      errorModal.show();
    }
  
    // Toggle submit button based on validation
    function toggleSubmitButton() {
      const nameValid = validateName(nameInput.value);
      const emailValid = validateEmail(emailInput.value);
  
      if (nameValid && emailValid) {
        submitButton.disabled = false;
        validationName.textContent = "";
        validationEmail.textContent = "";
      } else {
        submitButton.disabled = true;
        validationName.textContent = "Please fill in valid name.";
        validationEmail.textContent = "Please enter a valid email.";
      }
    }
  
    // Name field validation on blur
    nameInput.addEventListener("blur", function () {
      const name = nameInput.value;
  
      if (name === "") {
        validationName.textContent = "Name is required.";
      } else if (!validateName(name)) {
        validationName.textContent = "Name can only contain alphabets.";
      } else {
        validationName.textContent = "";
      }
  
      toggleSubmitButton();
    });
  
    // Email field validation on blur
    emailInput.addEventListener("blur", function () {
      const email = emailInput.value;
  
      if (validateEmail(email)) {
        validationEmail.textContent = "";
      } else {
        validationEmail.textContent = "Please enter a valid email.";
      }
  
      toggleSubmitButton();
    });
  
    // Form submission
    const submitForm = document.getElementById("contact-form");
    if (submitForm) {
      submitForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        // Simulate a successful submission (replace with your own logic)
        // In a real scenario, you would make an AJAX request here
        showSuccessMessage("Form submitted successfully");
  
        // Clear the form (optional)
        nameInput.value = "";
        emailInput.value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
      });
    }
  });
  