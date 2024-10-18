document.getElementById("check-btn").addEventListener("click", function () {

    const userInputValue = document.getElementById("user-input").value.trim()

    const resultsDiv = document.getElementById('results-div');

    if (!userInputValue) {
        alert("Please provide a phone number");
        //I could have written "userInputValue === "" in the argument"
        return;
    }

    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-])?\d{3}([\s-])?\d{4}$/;

    if (phoneRegex.test(userInputValue)) {
        resultsDiv.textContent = `Valid US number: ${userInput}`;
      } else {
        resultsDiv.textContent = `Invalid US number: ${userInput}`;
      }

      document.getElementById('clear-btn').addEventListener('click', function() {
        document.getElementById('user-input').value = '';
        document.getElementById('results-div').textContent = '';
      });
    });
