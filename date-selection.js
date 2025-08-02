// Initialize celebration effects when page loads
document.addEventListener('DOMContentLoaded', function() {
    startCelebration();
    createFloatingHearts();
});

function startCelebration() {
    // Create initial confetti burst
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createConfetti();
        }, i * 100);
    }
    
    // Continue with periodic confetti but less frequent
    setInterval(createConfetti, 5000);
}

function createConfetti() {
    const confetti = document.createElement('div');
    const symbols = ['🎉', '🎊', '💖', '💕', '💗', '🌟', '⭐', '✨'];
    
    confetti.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-50px';
    confetti.style.fontSize = (Math.random() * 15 + 10) + 'px';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '1001';
    confetti.style.animation = `fall ${Math.random() * 2 + 2}s linear forwards`;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        if (document.body.contains(confetti)) {
            document.body.removeChild(confetti);
        }
    }, 4000);
}

function createFloatingHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = ['💖', '💕', '💗'][Math.floor(Math.random() * 3)];
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.bottom = '-50px';
        heart.style.fontSize = '1.5rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.style.animation = 'floatUp 3s linear forwards';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            if (document.body.contains(heart)) {
                document.body.removeChild(heart);
            }
        }, 3000);
    }, 2000);
}

// Date information
const dateInfo = {
    movie: {
        title: 'Movie Date 🎬',
        description: 'Going to the cinema together',
        suggestions: 'We can watch romantic comedies, action movies, or whatever you like!'
    },
    paint: {
        title: 'Paint Date 🎨',
        description: 'Painting and being creative together',
        suggestions: 'We can paint on canvases or get a paint-by-numbers set!'
    },
    clay: {
        title: 'Pottery Date 🏺',
        description: 'Making beautiful things with clay',
        suggestions: 'We can go to a pottery studio or experiment with clay at home!'
    },
    'lego-picnic': {
        title: 'Lego & Picnic 🧱',
        description: 'Building Lego and having a picnic in the park',
        suggestions: 'Bring a big Lego set and delicious snacks for the picnic!'
    },
    puzzle: {
        title: 'Puzzle Date 🧩',
        description: 'Puzzling together cozily',
        suggestions: 'Pick a beautiful 1000-piece puzzle and relax together!'
    },
    'custom-idea': {
        title: 'Your Idea 💡',
        description: 'You have a better idea for our date',
        suggestions: 'Tell me what you\'d like to do - I\'m open to anything!'
    }
};

function selectDate(dateType) {
    // Add click animation
    const clickedCard = event.currentTarget;
    clickedCard.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        clickedCard.style.transform = '';
        // Store selected date type and redirect to booking page
        localStorage.setItem('selectedDateType', dateType);
        window.location.href = 'date-booking.html';
    }, 200);
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes floatUp {
        0% {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
        }
        100% {
            opacity: 0;
            transform: translateY(-100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);