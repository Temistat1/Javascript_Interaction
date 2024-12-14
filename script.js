// Array of fortunes
const fortunes = [
  "You will find success in an unexpected place.",
  "A new adventure awaits you soon.",
  "Someone you admire is thinking of you today.",
  "You will soon come across an opportunity that will change your life.",
  "Today is a great day to start something new!"
];

// Function to generate a random fortune
function generate() {
  const name = document.getElementById('visitor-name').value;
  if (!name) {
    alert("Please enter your name!");
    return;
  }
  
  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  const outputElement = document.getElementById('output');
  outputElement.innerHTML = `${name}, your fortune is: ${fortune}`;
  
  // Call restyle to change the appearance each time
  restyle(outputElement);
}

// Function to restyle the output randomly
function restyle(element) {
  // Array of possible CSS styles
  const colors = ['#FF6347', '#4CAF50', '#00BFFF', '#FFD700', '#FF1493'];
  const fontSizes = ['20px', '24px', '28px', '32px', '36px'];
  const fontFamilies = ['Arial', 'Courier New', 'Georgia', 'Tahoma', 'Verdana'];
  const textAlignments = ['left', 'center', 'right'];

  // Apply random styles
  element.style.color = colors[Math.floor(Math.random() * colors.length)];
  element.style.fontSize = fontSizes[Math.floor(Math.random() * fontSizes.length)];
  element.style.fontFamily = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
  element.style.textAlign = textAlignments[Math.floor(Math.random() * textAlignments.length)];
}
