// Array of random responses
const responses = [
  "your fortune is to have a great day!",
  "you should wear something yellow today!",
  "your meal of the day is pasta!",
  "try painting as an activity today!",
  "your horoscope says you will meet someone interesting!"
];

// Function to generate a random response
function generate(name) {
  const outputElement = document.getElementById("output");
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  outputElement.textContent = `${name}, ${randomResponse}`;
}

// Function to apply random styles
function restyle() {
  const outputElement = document.getElementById("output");

  // Generate random values for CSS properties
  const colors = ["red", "blue", "green", "purple", "orange"];
  const fonts = ["Arial", "Georgia", "Courier New", "Times New Roman", "Verdana"];
  const sizes = ["16px", "20px", "24px", "28px", "32px"];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  const randomSize = sizes[Math.floor(Math.random() * sizes.length)];

  // Apply random styles
  outputElement.style.color = randomColor;
  outputElement.style.fontFamily = randomFont;
  outputElement.style.fontSize = randomSize;
}
