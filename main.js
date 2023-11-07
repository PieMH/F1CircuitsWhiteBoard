const slotsSection = document.getElementById('circuitsSlots');

// Array of slot filenames
const slotFilenames = ['slot1.html', 'slot2.html'];

// Function to fetch and load slot HTML files
function loadSlots() {
    slotFilenames.forEach(filename => {
        fetch(filename)
            .then(response => response.text())
            .then(html => {
                const slotElement = document.createElement('div');
                slotElement.innerHTML = html;
                slotsSection.appendChild(slotElement);
            });
    });
}

// Load the slots
loadSlots();