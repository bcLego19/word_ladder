// Generate target words (replace with your logic)
const targetWords = ["POOL", "COOL", "COIL", "TOIL"];

// Access the game board element from HTML
const gameBoard = document.getElementById("game-board");

// Loop through each target word
targetWords.forEach((word, index) => {
  // Create a container element for each word
  const wordContainer = document.createElement("div");
  wordContainer.classList.add("word-container");

  // Display word number
  const wordNumber = document.createElement("p");
  wordNumber.textContent = `Word ${index + 1}:`;
  wordContainer.appendChild(wordNumber);

  // Create individual input fields for each letter
  for (let i = 0; i < word.length; i++) {
    const letterInput = document.createElement("input");
    letterInput.type = "text";
    letterInput.maxlength = 1; // Only allows one character
    wordContainer.appendChild(letterInput);
  }

  // Add a button to check the guess (replace with functionality)
  const guessButton = document.createElement("button");
  guessButton.textContent = "Guess";
  wordContainer.appendChild(guessButton);

  // Add a button to reveal the hint (replace with functionality)
  const hintButton = document.createElement("button");
  hintButton.textContent = "Hint";
  wordContainer.appendChild(hintButton);

  // Append the entire word container to the game board
  gameBoard.appendChild(wordContainer);
});
