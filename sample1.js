// Function to submit the form data and redirect to another page
function submitForm() {
    // Get values from the first form
    var challengeTitle = document.getElementById('challengeTitle').value;
    var challengeDescription = document.getElementById('challengeDescription').value;
    var challengeCondition = document.getElementById('challengeCondition').value;
    var preferredLanguage = document.getElementById('preferredLanguage').value;
  
    // Get values from the second form
    var solution = document.getElementById('solution').value;
    var testCases = document.getElementById('testCases').value;
  
    // Store form data in sessionStorage
    sessionStorage.setItem('challengeTitle', challengeTitle);
    sessionStorage.setItem('challengeDescription', challengeDescription);
    sessionStorage.setItem('challengeCondition', challengeCondition);
    sessionStorage.setItem('preferredLanguage', preferredLanguage);
    sessionStorage.setItem('solution', solution);
    sessionStorage.setItem('testCases', testCases);
  
    // Redirect to another page
    window.location.href = "another_page.html";
  }
  