// Reads from a text input with the id "skill-icon" on input
// Writes class to an element the id "skill-icon-display"
window.addEventListener("load", function(evt) {
    // Update the icon dynamically as user types
    const skillIconEl = document.getElementById("skill-icon");
    const skillIconDisplayEl = document.getElementById("skill-icon-display");

    skillIconEl.addEventListener("input", evt => {
        skillIconDisplayEl.className = skillIconEl.value;
    });
});
