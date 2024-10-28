// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Normalize the string: remove non-alphanumeric characters and convert to lowercase
    const normalizedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
            }
    
    // Select the input, button, and result elements
    const textInput = document.getElementById('text-input');
    const checkButton = document.getElementById('check-btn');
    const resultDiv = document.getElementById('result');
     
    
    // Add a click event listener to the button
    checkButton.addEventListener('click', function() {
      const inputValue = `<b>${textInput.value.trim()}</b>`;
    console.log(inputValue);
       // Check if the input value is empty
      if (textInput.value.trim() === '') {
        alert('Please input a value');
        return;
        }
       // Check if the input value is a palindrome
      if (isPalindrome(inputValue)) {
        resultDiv.innerHTML = `${inputValue} is a palindrome`;
          } else {
          resultDiv.innerHTML = `${inputValue} is not a palindrome`;
          }
      });