// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission behavior
  
  // You can add your form validation or submission logic here
  
  // For example, you can retrieve form data like this:
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const age = formData.get('age');
  const sex = formData.get('sex');
  
  // Then, you can perform further actions, such as AJAX requests or form validation
  
  // For now, let's log the form data to the console
  console.log('Name:', name);
  console.log('Age:', age);
  console.log('Sex:', sex);
}

// Add event listener to the form
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

// Function to handle time button click
function handleTimeButtonClick(event) {
  const selectedTime = event.target.textContent;
  console.log('Selected time:', selectedTime);
  
  // You can perform further actions here based on the selected time
}

// Add event listener to time buttons
const timeButtons = document.querySelectorAll('.time-button');
timeButtons.forEach(button => {
  button.addEventListener('click', handleTimeButtonClick);
});
