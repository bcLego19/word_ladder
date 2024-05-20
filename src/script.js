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
    if (input.value) { // Check if there's a value before adding
        if (input.value.length === 1){
            guess += input.value;
        } else {
            alert("Error: Too many letters. Try again!");
            return;
        }
    } else {
        // Handle empty input (optional: display warning or treat as incorrect guess)
        alert("Error: Missing letter. Try again!");
        return;
    }
  }
  if (guess.toUpperCase() === targetWord) {
    const wordIndex = wordContainer.dataset.index;
    guessedWords[wordIndex] = true;
    wordContainer.classList.add("correct"); // Mark the guess as correct visually
    targetWordDisplay.textContent += ` ${targetWord}`;
    document.getElementById(`guess-button-${wordIndex}`).disabled = true; // Disable guess button using ID
    checkWinCondition(guessedWords); // Check for win condition after a correct guess
  } else {
    alert("Incorrect guess. Try again!");
  }
}

function checkWinCondition(guessedWords) {
    // Check if all elements in guessedWords are true
    if (guessedWords.every(wordGuessed => wordGuessed === true)) {
      alert("Congratulations! You guessed all the words!");
      // Add any additional logic for handling a win (e.g., disable buttons, display win message)
    }
}

// Function to swap the position of two word containers
function swapWords(container1, container2) {
  const temp = container1.parentNode.replaceChild(container2, container1);
  container1.parentNode.insertBefore(temp, container2);
}

// Function to check for win condition
function checkWinCondition(guessedWords) {
    if (guessedWords.every(wordGuessed => wordGuessed === true)) {
      alert("Congratulations! You guessed all the words!");
      // Add any additional logic for handling a win (e.g., disable buttons, display win message)
    }
}

let guessedWords = new Array(targetWords.length).fill(false); // Create array with false values

// Loop through each target word and create elements
targetWords.forEach((word, index) => {
  const wordContainer = document.createElement("div");
  wordContainer.classList.add("word-container");
  wordContainer.dataset.index = index; // Add data attribute for index

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
  guessButton.id = `guess-button-${index}`; // Add unique ID based on index
  guessButton.addEventListener("click", () => checkGuess(wordContainer, targetWords[index]));
  wordContainer.appendChild(guessButton);

  const hintButton = document.createElement("button");
  hintButton.textContent = "Hint";
  hintButton.addEventListener("click", () => alert(hints[index])); // Show hint on click
  wordContainer.appendChild(hintButton);

  gameBoard.appendChild(wordContainer);
});
