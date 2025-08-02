// Initialize celebration effects when page loads
document.addEventListener('DOMContentLoaded', function() {
    startCelebration();
    createFloatingHearts();
    
    // Play celebration sound if available
    const audio = document.getElementById('celebrationSound');
    if (audio) {
        audio.volume = 0.3;
        audio.play().catch(e => console.log('Audio play prevented by browser'));
    }
});

function startCelebration() {
    // Create initial confetti burst
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createConfetti();
        }, i * 100);
    }
    
    // Continue with periodic confetti
    setInterval(createConfetti, 3000);
}

function createConfetti() {
    const confetti = document.createElement('div');
    const symbols = ['🎉', '🎊', '💖', '💕', '💗', '🌟', '⭐', '✨', '🎈'];
    const colors = ['#ff6b9d', '#ffa8d5', '#ff9a9e', '#a8e6cf', '#ffd93d', '#6bcf7f'];
    
    confetti.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-50px';
    confetti.style.fontSize = (Math.random() * 20 + 15) + 'px';
    confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '1001';
    confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        if (document.body.contains(confetti)) {
            document.body.removeChild(confetti);
        }
    }, 5000);
}

function createFloatingHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = ['💖', '💕', '💗', '💓', '💝'][Math.floor(Math.random() * 5)];
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.bottom = '-50px';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            if (document.body.contains(heart)) {
                document.body.removeChild(heart);
            }
        }, 4000);
    }, 1500);
}

// Content for different sections
const contentData = {
    dining: {
        title: "🍽️ Romantic Dinner Ideas",
        content: `
            <div class="idea-grid">
                <div class="idea-card">
                    <h3>🕯️ Candlelit Dinner</h3>
                    <p>A romantic dinner at that cozy restaurant we've been wanting to try</p>
                </div>
                <div class="idea-card">
                    <h3>👨‍🍳 Home Cooking</h3>
                    <p>Cook together at home - pizza making or pasta from scratch!</p>
                </div>
                <div class="idea-card">
                    <h3>🥂 Wine Tasting</h3>
                    <p>Try a wine tasting experience with cheese and chocolate pairings</p>
                </div>
                <div class="idea-card">
                    <h3>🍰 Dessert Tour</h3>
                    <p>Visit different cafes and try their signature desserts</p>
                </div>
            </div>
        `
    },
    movies: {
        title: "🎬 Movie Night Options",
        content: `
            <div class="idea-grid">
                <div class="idea-card">
                    <h3>🏠 Cozy Home Theater</h3>
                    <p>Blanket fort, popcorn, and our favorite romantic comedies</p>
                </div>
                <div class="idea-card">
                    <h3>🎭 Cinema Date</h3>
                    <p>Catch the latest romantic movie at the theater with dinner after</p>
                </div>
                <div class="idea-card">
                    <h3>🌟 Drive-in Movie</h3>
                    <p>Old-school drive-in experience under the stars</p>
                </div>
                <div class="idea-card">
                    <h3>📱 Virtual Reality</h3>
                    <p>Experience movies in VR or play fun couple games together</p>
                </div>
            </div>
        `
    },
    activities: {
        title: "🎯 Fun Activities Together",
        content: `
            <div class="idea-grid">
                <div class="idea-card">
                    <h3>🎨 Art & Paint</h3>
                    <p>Paint and sip class or create art together at home</p>
                </div>
                <div class="idea-card">
                    <h3>🚶‍♀️ Nature Walk</h3>
                    <p>Scenic hike, park stroll, or beach walk during sunset</p>
                </div>
                <div class="idea-card">
                    <h3>🎮 Game Night</h3>
                    <p>Board games, video games, or fun couple challenges</p>
                </div>
                <div class="idea-card">
                    <h3>💃 Dancing</h3>
                    <p>Dance class, or just dancing in the living room to our songs</p>
                </div>
            </div>
        `
    },
    surprise: {
        title: "🎁 Special Surprises",
        content: `
            <div class="surprise-content">
                <div class="surprise-message">
                    <h2>✨ The best surprise is spending time together! ✨</h2>
                    <p>Here are some sweet ideas:</p>
                </div>
                <div class="idea-grid">
                    <div class="idea-card special">
                        <h3>💝 Memory Lane</h3>
                        <p>Visit the place where we first met or had our first date</p>
                    </div>
                    <div class="idea-card special">
                        <h3>📸 Photo Adventure</h3>
                        <p>Create new memories with a photo scavenger hunt around the city</p>
                    </div>
                    <div class="idea-card special">
                        <h3>💌 Love Letters</h3>
                        <p>Write letters to our future selves to open next Valentine's Day</p>
                    </div>
                    <div class="idea-card special">
                        <h3>🌟 Stargazing</h3>
                        <p>Find a quiet spot to look at stars and dream together</p>
                    </div>
                </div>
            </div>
        `
    }
};

function showDatingIdeas() {
    showContent('dining');
}

function showMovieOptions() {
    showContent('movies');
}

function showActivityIdeas() {
    showContent('activities');
}

function showSurprise() {
    showContent('surprise');
    // Extra special effects for surprise
    for (let i = 0; i < 10; i++) {
        setTimeout(() => createConfetti(), i * 200);
    }
}

function showContent(type) {
    const contentArea = document.getElementById('contentArea');
    const data = contentData[type];
    
    contentArea.innerHTML = `
        <h2>${data.title}</h2>
        ${data.content}
    `;
    
    contentArea.classList.add('show');
    
    // Scroll to content
    contentArea.scrollIntoView({ behavior: 'smooth' });
}

function goBack() {
    window.location.href = 'index.html';
}

function goToFinalPage() {
    window.location.href = 'final-page.html';
}

// Add CSS for the dynamic content
const style = document.createElement('style');
style.textContent = `
    .idea-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
        margin-top: 1.5rem;
    }
    
    .idea-card {
        background: linear-gradient(135deg, #fff, #f8f9fa);
        padding: 1.5rem;
        border-radius: 15px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        text-align: left;
    }
    
    .idea-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }
    
    .idea-card.special {
        background: linear-gradient(135deg, #ff6b9d, #ffa8d5);
        color: white;
    }
    
    .idea-card h3 {
        color: #d63384;
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
    }
    
    .idea-card.special h3 {
        color: white;
    }
    
    .idea-card p {
        color: #6c757d;
        font-size: 0.9rem;
        line-height: 1.5;
    }
    
    .idea-card.special p {
        color: rgba(255, 255, 255, 0.9);
    }
    
    .surprise-content {
        text-align: center;
    }
    
    .surprise-message {
        margin-bottom: 2rem;
    }
    
    .surprise-message h2 {
        color: #d63384;
        margin-bottom: 1rem;
    }
    
    .surprise-message p {
        color: #6c757d;
        font-size: 1.1rem;
    }
    
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @media (max-width: 768px) {
        .idea-grid {
            grid-template-columns: 1fr;
            gap: 0.8rem;
        }
        
        .idea-card {
            padding: 1rem;
        }
    }
`;
document.head.appendChild(style);