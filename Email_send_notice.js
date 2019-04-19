function sendMail(contactForm) {
    emailjs.send("salha_saad", "salha", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            document.getElementById("#contact_form").reset();
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}



/*function customReset()
{
    document.getElementById("fullname").value = "";
    document.getElementById("emailaddress").value = "";
    document.getElementById("projectsummary").value = "";
}

function submitForm() {
   // Get the first form with the name
   // Usually the form name is not repeated
   // but duplicate names are possible in HTML
   // Therefore to work around the issue, enforce the correct index
   var frm = document.getElementsByName('contact_form')[0];
   frm.submit(); // Submit the form
   frm.reset();  // Reset all form data
   return false; // Prevent page refresh
}*/