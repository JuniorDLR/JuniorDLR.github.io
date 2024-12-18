document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('card');
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const imageContainer = document.getElementById('image-container');
    const floatingHearts = document.getElementById('floating-hearts');
    const loveMessages = document.getElementById('love-messages');

    let isOpen = false;
    let showLoveMessages = false;

    function toggleCard() {
        isOpen = !isOpen;
        card.style.height = isOpen ? '80vh' : '200px';
        envelope.style.height = isOpen ? '0' : '100%';
        letter.style.transform = isOpen ? 'translateY(0)' : 'translateY(100%)';
        letter.style.display = isOpen ? 'flex' : 'none';

        if (isOpen) {
            createFloatingHearts();
        } else {
            floatingHearts.innerHTML = '';
        }
    }

    function createFloatingHearts() {
        floatingHearts.innerHTML = '';
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('i');
            heart.className = 'fas fa-heart floating-heart';
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.fontSize = `${20 + Math.random() * 20}px`;
            heart.style.animationDuration = `${3 + Math.random() * 2}s`;
            heart.style.animationDelay = `${Math.random() * 3}s`;
            floatingHearts.appendChild(heart);
        }
    }

    function toggleLoveMessages() {
        if (!showLoveMessages) {
            showLoveMessages = true;
            loveMessages.innerHTML = '';
            for (let i = 0; i < 15; i++) {
                const message = document.createElement('div');
                message.className = 'love-message';
                message.textContent = 'Te amo';
                message.style.left = `${Math.random() * 80 + 10}%`;
                message.style.top = `${Math.random() * 80 + 10}%`;
                message.style.animationDelay = `${Math.random() * 0.5}s`;
                loveMessages.appendChild(message);
            }
            setTimeout(() => {
                showLoveMessages = false;
                loveMessages.innerHTML = '';
            }, 3000);
        }
    }

    card.addEventListener('click', toggleCard);
    imageContainer.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLoveMessages();
    });

    // Log to console to show the script is running
    console.log('Carta Romántica script is running');
});

// This is just to demonstrate the script running in the Node.js environment
console.log('Carta Romántica script loaded successfully');

