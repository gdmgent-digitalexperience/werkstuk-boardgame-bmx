document.addEventListener('DOMContentLoaded', function() {
    const messages = [
        'Jouw rol is Krokodil, je moet op zoek gaan naar moeras landschappen',
        'Jouw rol is Kameleon, je moet op zoek gaan naar woestijn landschappen',
        'Jouw rol is Hagedis, je moet op zoek gaan naar berglandschappen',
        'Jouw rol is Gekko, je moet op zoek gaan naar regenwoud gebieden',
        'Jouw rol is Schildpad, je moet op zoek gaan naar water gebieden',
        'Jouw rol is Slang, je moet op zoek gaan naar grassteppe gebieden'
    ];

    // Wijs vooraf een unieke rol toe aan elke van de 6 spelers
    const playerRoles = [];
    const availableMessages = messages.slice();
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * availableMessages.length);
        playerRoles.push(availableMessages.splice(randomIndex, 1)[0]);
    }

    const actionButton = document.getElementById('actionButton');
    const nextButton = document.getElementById('nextButton');
    const readyButton = document.getElementById('readyButton');
    const readyAfter3Button = document.getElementById('readyAfter3Button');
    const messageElement = document.getElementById('message');

    let currentPlayer = 1;
    let playerRevealed = false;

    function updateActionLabel() {
        actionButton.textContent = `speler ${currentPlayer}, druk hier om uw rol te ontdekken`;
    }

    function showDiscoverState() {
        updateActionLabel();
        actionButton.classList.remove('hidden');
        nextButton.classList.add('hidden');
        readyButton.classList.add('hidden');
        readyAfter3Button.classList.add('hidden');
        messageElement.textContent = 'Druk op de knop om uw rol te ontdekken.';
    }

    function showAfterReveal() {
        actionButton.classList.add('hidden');
        nextButton.classList.remove('hidden');
        readyAfter3Button.classList.add('hidden');
        readyButton.classList.add('hidden');

        if (currentPlayer === 3 || currentPlayer === 4 || currentPlayer === 5) {
            readyAfter3Button.classList.remove('hidden');
        }
        if (currentPlayer >= 6) {
            nextButton.classList.add('hidden');
            readyButton.classList.remove('hidden');
        }
    }

    actionButton.addEventListener('click', function() {
    if (playerRevealed || currentPlayer > playerRoles.length) {
            return;
        }
        const nextMessage = playerRoles[currentPlayer - 1];
        messageElement.textContent = nextMessage;
        playerRevealed = true;
        showAfterReveal();
    });

    nextButton.addEventListener('click', function() {
        if (currentPlayer < 6) {
            currentPlayer += 1;
        }
        playerRevealed = false;
        showDiscoverState();
    });

    readyButton.addEventListener('click', function() {
        window.location.href = 'ready.html';
    });

    readyAfter3Button.addEventListener('click', function() {
        window.location.href = 'ready.html';
    });

    showDiscoverState();
});