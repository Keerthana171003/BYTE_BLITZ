document.addEventListener("DOMContentLoaded", function () {
    // Retrieve stored form data from sessionStorage
    var storedFormData = sessionStorage.getItem("formData");
  
    if (storedFormData) {
      // Parse the JSON string to an object
      var formData = JSON.parse(storedFormData);
  
      // Display the form data on the page
      displayFormData(formData);
    } else {
      // Handle the case where no form data is available
      document.getElementById("formDataDisplay").innerHTML = "No form data available.";
    }
  });
  
  function displayFormData(formData) {
    var displayElement = document.getElementById("formDataDisplay");
  
    // Create HTML to display form data
    var html = `
      <p><strong>Title:</strong> ${formData.challengeTitle}</p>
      <p><strong>Description:</strong> ${formData.challengeDescription}</p>
      <p><strong>Boundary Condition:</strong> ${formData.challengeCondition}</p>
      <p><strong>Preferred Language:</strong> ${formData.preferredLanguage}</p>
      <p><strong>Solution:</strong> ${formData.solution}</p>
      <p><strong>Test Cases:</strong> ${formData.testCases}</p>
    `;
  
    // Set the HTML content of the display element
    displayElement.innerHTML = html;
  }
  