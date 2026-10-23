
function showPopup() {
    const popup = document.getElementById("popup");

    if (popup) {
        popup.hidden = false;

        const closeButton = document.getElementById("close-popup");
        if (closeButton) {
            closeButton.focus();
        }
    }
}

function closePopup() {
    const popup = document.getElementById("popup");

    if (popup) {
        popup.hidden = true;
    }
}

const recommendationForm = document.getElementById("recommendation-form");

if (recommendationForm) {
    recommendationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const input = document.getElementById("recommendation-input");
        const recommendationText = input.value.trim();

        // Do not submit an empty recommendation.
        if (recommendationText === "") {
            input.focus();
            return;
        }

        // Create a new recommendation card.
        const newCard = document.createElement("div");
        newCard.className = "recommendation-card";
        newCard.textContent = recommendationText;

        // Add it to the existing recommendation list.
        const list = document.getElementById("recommendations-list");
        list.appendChild(newCard);

        // Clear the form after a successful submission.
        input.value = "";

        // Show the popup only after the card has been added.
        showPopup();
    });
}

// Close the popup using its button.
const closeButton = document.getElementById("close-popup");

if (closeButton) {
    closeButton.addEventListener("click", closePopup);
}

// Close the popup by clicking outside its content.
const popup = document.getElementById("popup");

if (popup) {
    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            closePopup();
        }
    });
}

// Close the popup with the Escape key.
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closePopup();
    }
});
