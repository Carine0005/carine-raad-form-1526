// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
const submitButton = document.querySelector("#submit-button");
// <input type="text" id="fullname">,
const fullNameInput = document.querySelector("#fullname");
// <input type="text" id="email">
const emailInput = document.querySelector("#email");
// <textarea id="message"></textarea>
const messageInput = document.querySelector("#message");

const feedbackEl = document.querySelector("#feedback");

// Declare variable that will 
// store regular expression for email
const emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// READY TO START CODING
function validateContactForm() {
// Start with your function here
// (come up with the meaningful name).
   
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
const data = {};
const errors = [];
    // Declare object that will store the form-data
    // Declare array that will store the errors


  
    //FULL NAME 
const fullname = fullNameInput.value.trim();
if(fullname !== "") {
    data.fullname = fullname;
} else {
    errors.push("Full name is required.");
}
    // Check if fullname is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
    // End your conditional here.


    // EMAIL 
 const email = emailInput.value.trim();
if(email !== "") {
   if (emailRegex.test(email)){
    data.email = email;
   } else {
    errors.push("Email format is invalid.");
} } else {
    errors.push("Email is required.");
}
    // Check if email is not empty.
       // Check if email is valid.
       // If so:
          // Pass the collected value
          // to your object "data".
       // Otherwise:
          // Create a corresponding error-message
          // and add it to your array "errors".
       // End your nested conditional here.
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your outer conditional here.


  
    // MESSAGE 
const message = messageInput.value.trim();
if(message !== "") {
    data.message = message;
} else {
    errors.push("Message is required.");
}
    // Check if message is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your conditional here.


  
    // FEEDBACK/ERRORS 
   if (errors.length > 0){
    console.log("ERRORS:", errors);
    showErrors(errors);
   } else {
    console.log("DATA:", data);
    showSuccess("Form submitted successfully!");
    clearFields();
   }
}
    // Check if there is anything in array errors
       // If so: 
       // Print it in JavaScript console.
    // Otherwise:
       // Print the data in JavaScript console.
       // Clear text-fields
    // End your conditional here.
function showErrors(errors) {
    const listItems = errors.map((err) => `<li>${err}</li>`).join("");
    feedbackEl.innerHTML = `<div class="error"> <strong> Please fix the following:</strong>
    <ul>${listItems}</ul>
    </div> `;
}

function showSuccess(msg) {
    feedbackEl.innerHTML = `<div class="success"> <strong>${msg}</strong></div>`;
}

function clearFields(){
    fullNameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
}
// Close your function here
    
// Register your form to "click" event.
submitButton.addEventListener("click", validateContactForm);