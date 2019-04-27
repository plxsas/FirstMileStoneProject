function sendMail() {
    var serviceId = "salha_saad";
    var templateId = "salha";
    var templateParams = {
        "from_name": $("#fullname").value,
        "from_email": $("#email").value,
        "project_request": $("#pojectsummary").value,
    };


    email.send(serviceId, templateId, templateParams)


    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Sent!");
        },

        function(error) {
            console.log("FAILED", error);
            alert("Send email failed\r\n Response: \n" + JSON.stringify(error));
        });
}
