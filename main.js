const circuitsSlotsSection = document.getElementById('circuitsSlots');

// Array of slot filenames
const circuitsFiles = [
    'circuits/Bahrain.html',
    'circuits/Jeddah.html',
    'circuits/AlbertPark.html',
    'circuits/Baku.html',
    'circuits/Miami.html',
    'circuits/Imola.html',
    'circuits/Monaco.html',
    'circuits/Barcelona.html',
    'circuits/GillesVilleneuve.html',
    'circuits/RedBullRing.html',
    'circuits/Silverstone.html',
    'circuits/Hungaroring.html',
    'circuits/Spa.html',
    'circuits/Zandvoort.html',
    'circuits/Monza.html',
    'circuits/MarinaBay.html',
    'circuits/Suzuka.html',
    'circuits/Lusail.html',
    'circuits/COTA.html',
    'circuits/HermanosRodriguez.html',
    'circuits/Interlagos.html',
    'circuits/LasVegas.html',
    'circuits/YasMarina.html',
];

function loadSlots() {
    const promises = circuitsFiles.map(filename => {
        return fetch(filename)
            .then(response => response.text());
    });

    Promise.all(promises)
        .then(htmls => {
            htmls.forEach((html, index) => {
                const slotElement = document.createElement('div');
                slotElement.innerHTML = html;
                const attribute = circuitsFiles[index].replace('circuits/', '').replace('.html', '');
                slotElement.setAttribute('id', `${attribute}`);
                circuitsSlotsSection.appendChild(slotElement);
            });

            // Check if the URL has a hash (e.g., #slot-1) and scroll to the corresponding slot
            const hash = window.location.hash;
            if (hash) {
                const slotId = hash.replace('#', '');
                const slot = document.getElementById(slotId);
                if (slot) {
                    slot.scrollIntoView({ behavior: 'smooth' });
                }
            }

            // // Check if the URL has a hash (e.g., #slot-1) and scroll to the corresponding slot
            // const hash = window.location.hash;
            // if (hash) {
            //     const slotId = hash.replace('#', '');
            //     const slot = document.getElementById(slotId);
            //     if (slot) {
            //         slot.scrollIntoView({
            //             behavior: 'smooth',
            //             block: 'center',
            //             inline: 'center',
            //             scrollMarginTop: '50vh' // Adjust this value as per your requirements
            //         });
            //     }
            // }
        });
}

// Load the slots
loadSlots();