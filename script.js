const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    const fc = document.getElementById("flashcard");
    if (showingTerm) {
        fc.textContent = flashcards[currentIndex].term

    }
    else {
        fc.textContent = flashcards[currentIndex].definition

    }
}
function addOne() {
    currentIndex = currentIndex + 1;
    if (currentIndex == flashcards.length) {
        currentIndex = 0;
    }
    showingTerm = true;

    displayCard();
}
function minusOne() {
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
        currentIndex = flashcards.length - 1;
    }
    showingTerm = true;

    displayCard();

}
function swapTermDef() {
    if (showingTerm === true) {
        showingTerm = false;

    }
    else {
        showingTerm = true;

    }
    displayCard();

}
function addItem() {
    const term = document.getElementById("new-term").value
    const definition = document.getElementById("new-definition").value
    if (term == "") {
        alert("Term needed");
    }
    else if (definition == "") {
        alert("Definition needed");

    }
    else {
        flashcards.push({ term, definition });
    }

}

// The rest of the code you will write is apart of event listeners
document.getElementById("next-btn").addEventListener("click", addOne);
document.getElementById("prev-btn").addEventListener("click", minusOne);


document.getElementById("flashcard").addEventListener("click", swapTermDef);
document.getElementById("add-card-btn").addEventListener("click", addItem);


// This line will display the card when the page is refreshed
window.onload = displayCard;
