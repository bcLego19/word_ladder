// Generate target words (replace with your logic)
const targetWords = ["POOL", "COOL", "COIL", "TOIL"];
const hints = ["Fun with water", "Something you feel", "To wrap around", "A type of work"]; // Hint list corresponding to target words

// Access the game board and target word display elements
const gameBoard = document.getElementById("game-board");
const targetWordDisplay = document.getElementById("target-words");

// Function to check user's guess for a word
function checkGuess(wordContainer, targetWord) {
    let guess = "";
    const inputs = wordContainer.querySelectorAll("input");
    for (const input of inputs) {
      guess += input.value;
    }
    if (guess.toUpperCase() === targetWord) {
        wordContainer.classList.add("correct"); // Mark the guess as correct visually
        targetWordDisplay.textContent += ` ${targetWord}`; // Add guessed word to target word display
    } else {
        alert("Incorrect guess. Try again!");
    }
}

// Function to swap the position of two word containers
function swapWords(container1, container2) {
    const temp = container1.parentNode.replaceChild(container2, container1);
    container1.parentNode.insertBefore(temp, container2);
}

// Loop through each target word and create elements
targetWords.forEach((word, index) => {
  const wordContainer = document.createElement("div");
  wordContainer.classList.add("word-container");

  const wordNumber = document.createElement("p");
  wordNumber.textContent = `Word ${index + 1}:`;
  wordContainer.appendChild(wordNumber);

  for (let i = 0; i < word.length; i++) {
    const letterInput = document.createElement("input");
    letterInput.type = "text";
    letterInput.maxlength = 1;
    wordContainer.appendChild(letterInput);
  }

  const guessButton = document.createElement("button");
  guessButton.textContent = "Guess";
  guessButton.addEventListener("click", () => checkGuess(wordContainer, targetWords[index])); // Call checkGuess function on click
  wordContainer.appendChild(guessButton);

  const hintButton = document.createElement("button");
  hintButton.textContent = "Hint";
  hintButton.addEventListener("click", () => alert(hints[index])); // Show hint on click
  wordContainer.appendChild(hintButton);

  gameBoard.appendChild(wordContainer);
});

