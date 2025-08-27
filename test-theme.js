// Simple test to check if dark mode is working
console.log("Testing dark mode functionality...");

// Check if dark class is present on html element
const htmlElement = document.documentElement;
console.log("HTML class list:", htmlElement.classList.toString());
console.log("Has 'dark' class:", htmlElement.classList.contains('dark'));

// Check localStorage
console.log("Theme in localStorage:", localStorage.getItem('theme'));

// Test toggle function
function testToggle() {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  console.log("Toggling theme from", currentTheme, "to", newTheme);
  
  localStorage.setItem('theme', newTheme);
  htmlElement.classList.toggle('dark', newTheme === 'dark');
  
  console.log("After toggle - HTML class list:", htmlElement.classList.toString());
}

// Run test
testToggle();
