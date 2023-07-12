// Function to validate the form fields
function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    
    // Clear any existing error messages
    clearErrors();
    
    // Get form field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const date = document.getElementById('date').value;
    const color = document.getElementById('color').value;
    
    // Validate name (at least 2 characters)
    if (name.length < 2) {
      showError('nameError', 'Name must be at least 2 characters');
    }
    
    // Validate email
    if (!validateEmail(email)) {
      showError('emailError', 'Please enter a valid email address');
    }
    
    // Validate phone number
    if (!validatePhone(phone)) {
      showError('phoneError', 'Please enter a valid phone number');
    }
    
    // Validate password (at least 6 characters)
    if (password.length < 6) {
      showError('passwordError', 'Password must be at least 6 characters');
    }
    
    // Validate age (between 18 and 100)
    if (age < 14 || age > 100) {
      showError('ageError', 'Age must be between 14 and 100');
    }
    
    // Validate gender (must be selected)
    if (gender === '') {
      showError('genderError', 'Please select a gender');
    }
    
    // Validate date
    if (!validateDate(date)) {
      showError('dateError', 'Please enter a valid date');
    }
    
    // Validate color
    if (!validateColor(color)) {
      showError('colorError', 'Please select a color');
    }
    
    // If there are no errors, display success message
    if (validateFormFields()) {
      alert('Form submitted successfully!');
      document.getElementById('myForm').reset(); // Reset form
    }
  }
  
  // Function to validate email format
  function validateEmail(email) {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  }
  
  // Function to validate phone number format
  function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }
  
  // Function to validate date format
  function validateDate(date) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date);
  }
  
  // Function to validate color format
  function validateColor(color) {
    // Since the color picker input type automatically validates the format, we just need to check if the value is not empty
    return color !== '';
  }
  
  // Function to show an error message for a specific field
  function showError(fieldId, errorMessage) {
    const errorSpan = document.getElementById(fieldId);
    errorSpan.textContent = errorMessage;
  }
  
  // Function to clear all error messages
  function clearErrors() {
    const errorSpans = document.getElementsByClassName('error');
    Array.from(errorSpans).forEach(errorSpan => {
      errorSpan.textContent = '';
    });
  }
  
  // Function to check if all form fields are valid
  function validateFormFields() {
    const errorSpans = document.getElementsByClassName('error');
    for (let i = 0; i < errorSpans.length; i++) {
      if (errorSpans[i].textContent !== '') {
        return false;
      }
    }
    return true;
  }
  
  // Add form submission event listener
  const form = document.getElementById('myForm');
  form.addEventListener('submit', validateForm);
  