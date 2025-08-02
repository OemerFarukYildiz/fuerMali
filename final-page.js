// Variables to track interaction state
let harshClickCount = 0;
let loveButtonScale = 1;

// Messages for the harsh button (inspired by the third repository)
const harshMessages = [
    "Shut up 😤",
    "Are you sure? 😢",
    "That makes me sad... 😔",
    "Why are you saying that? 😭",
    "I'm serious... 💔",
    "Please don't be so mean 😞",
    "You're hurting my feelings 😥",
    "I love you anyway ❤️‍🩹",
    "Can't you try again? 🥺",
    "I won't give up! 💪😢",
    "Please... 😭💔",
    "One last time? 🙏😢"
];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
    setupEmotionalAnimations();
});

function handleLoveClick() {
    const mainContent = document.getElementById('mainContent');
    const successResponse = document.getElementById('successResponse');
    
    // Create massive celebration
    createMassiveCelebration();
    
    // Show success response after a short delay
    setTimeout(() => {
        mainContent.style.display = 'none';
        successResponse.style.display = 'block';
        
        // Start hearts rain
        startHeartsRain();
        
        // Play celebration sound if available
        playSuccessSound();
        
    }, 1500);
}

function handleHarshClick() {
    const harshButton = document.getElementById('harshButton');
    const loveButton = document.getElementById('loveButton');
    const mainGif = document.getElementById('mainGif');
    
    // Increment click count
    harshClickCount++;
    
    // Make love button bigger
    loveButtonScale += 0.2;
    loveButton.style.transform = `scale(${loveButtonScale})`;
    loveButton.classList.add('growing');
    
    // Add shake animation to harsh button
    harshButton.classList.add('sad');
    setTimeout(() => harshButton.classList.remove('sad'), 500);
    
    // Update harsh button text
    const messageIndex = Math.min(harshClickCount - 1, harshMessages.length - 1);
    harshButton.querySelector('span').innerHTML = harshMessages[messageIndex];
    
    // Add sad emojis around the harsh button after a few clicks
    if (harshClickCount > 2) {
        addSadEmojis();
        
        // Change GIF to a sadder one
        if (harshClickCount === 3) {
            mainGif.src = "https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif";
        } else if (harshClickCount > 5) {
            mainGif.src = "https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif";
        }
    }
    
    // Create falling tears effect
    if (harshClickCount > 1) {
        createFallingTears();
    }
    
    // Special effect for persistent harsh clicks
    if (harshClickCount > 7) {
        createDesperateEffects();
    }
}

function addSadEmojis() {
    const container = document.querySelector('.buttons-container');
    
    // Remove existing sad emojis
    const existingEmojis = container.querySelectorAll('.sad-emoji');
    existingEmojis.forEach(emoji => emoji.remove());
    
    // Add new sad emojis
    const sadEmojis = ['😢', '😭', '💔', '😔', '😞', '😥'];
    for (let i = 0; i < 3; i++) {
        const emoji = document.createElement('span');
        emoji.className = 'sad-emoji';
        emoji.innerHTML = sadEmojis[Math.floor(Math.random() * sadEmojis.length)];
        emoji.style.position = 'absolute';
        emoji.style.left = Math.random() * 100 + '%';
        emoji.style.top = Math.random() * 50 + '%';
        container.appendChild(emoji);
        
        // Remove emoji after animation
        setTimeout(() => {
            if (container.contains(emoji)) {
                container.removeChild(emoji);
            }
        }, 3000);
    }
}

function createFallingTears() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const tear = document.createElement('div');
            tear.innerHTML = '💧';
            tear.style.position = 'fixed';
            tear.style.left = Math.random() * window.innerWidth + 'px';
            tear.style.top = '-50px';
            tear.style.fontSize = '1.5rem';
            tear.style.pointerEvents = 'none';
            tear.style.zIndex = '1000';
            tear.style.animation = 'tearFall 2s linear forwards';
            
            document.body.appendChild(tear);
            
            setTimeout(() => {
                if (document.body.contains(tear)) {
                    document.body.removeChild(tear);
                }
            }, 2000);
        }, i * 300);
    }
}

function createDesperateEffects() {
    // Screen shake effect
    document.body.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 500);
    
    // Change background to more emotional gradient
    document.body.style.background = 'linear-gradient(135deg, #ff6b9d, #dc3545, #6c757d)';
    
    // Add desperate text overlay
    const desperateText = document.createElement('div');
    desperateText.innerHTML = 'I really love you! 💔';
    desperateText.style.position = 'fixed';
    desperateText.style.top = '20%';
    desperateText.style.left = '50%';
    desperateText.style.transform = 'translate(-50%, -50%)';
    desperateText.style.fontSize = '2rem';
    desperateText.style.color = '#dc3545';
    desperateText.style.fontWeight = 'bold';
    desperateText.style.zIndex = '1001';
    desperateText.style.textShadow = '2px 2px 4px rgba(0,0,0,0.5)';
    desperateText.style.animation = 'heartbeat 1s ease-in-out infinite';
    
    document.body.appendChild(desperateText);
    
    setTimeout(() => {
        if (document.body.contains(desperateText)) {
            document.body.removeChild(desperateText);
        }
    }, 3000);
}

function createMassiveCelebration() {
    // Create confetti explosion
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            const symbols = ['🎉', '🎊', '💖', '💕', '💗', '🌟', '⭐', '✨', '🎈', '💐', '🌹', '🦋'];
            
            confetti.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-50px';
            confetti.style.fontSize = (Math.random() * 25 + 15) + 'px';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1001';
            confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                if (document.body.contains(confetti)) {
                    document.body.removeChild(confetti);
                }
            }, 5000);
        }, i * 50);
    }
    
    // Screen flash effect
    const flash = document.createElement('div');
    flash.style.position = 'fixed';
    flash.style.top = '0';
    flash.style.left = '0';
    flash.style.width = '100%';
    flash.style.height = '100%';
    flash.style.background = 'rgba(255, 255, 255, 0.8)';
    flash.style.zIndex = '1000';
    flash.style.opacity = '0';
    flash.style.animation = 'flash 0.5s ease-out';
    
    document.body.appendChild(flash);
    
    setTimeout(() => {
        if (document.body.contains(flash)) {
            document.body.removeChild(flash);
        }
    }, 500);
}

function startHeartsRain() {
    const heartsContainer = document.querySelector('.hearts-rain');
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = ['💖', '💕', '💗', '💓', '💝', '❤️', '🧡', '💛', '💚', '💙', '💜'][Math.floor(Math.random() * 11)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            if (heartsContainer.contains(heart)) {
                heartsContainer.removeChild(heart);
            }
        }, 3000);
    }, 300);
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
        heart.style.zIndex = '999';
        heart.style.animation = 'floatUp 4s linear forwards';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            if (document.body.contains(heart)) {
                document.body.removeChild(heart);
            }
        }, 4000);
    }, 2000);
}

function setupEmotionalAnimations() {
    // Add subtle animations to text elements
    const mainMessage = document.querySelector('.main-message');
    const loveDeclaration = document.querySelector('.love-declaration');
    
    // Random heart bursts around the love declaration
    setInterval(() => {
        if (Math.random() > 0.7) { // 30% chance
            createHeartBurst(loveDeclaration);
        }
    }, 5000);
}

function createHeartBurst(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'fixed';
        heart.style.left = centerX + 'px';
        heart.style.top = centerY + 'px';
        heart.style.fontSize = '1rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '999';
        
        const angle = (i * 45) * Math.PI / 180;
        const distance = 100;
        const endX = centerX + Math.cos(angle) * distance;
        const endY = centerY + Math.sin(angle) * distance;
        
        heart.style.animation = `burstOut 1.5s ease-out forwards`;
        heart.style.setProperty('--endX', endX + 'px');
        heart.style.setProperty('--endY', endY + 'px');
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            if (document.body.contains(heart)) {
                document.body.removeChild(heart);
            }
        }, 1500);
    }
}

function playSuccessSound() {
    // Create a simple celebration sound using Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
        oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (error) {
        console.log('Audio not supported');
    }
}

// Add CSS animations for new effects
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
    
    @keyframes tearFall {
        to {
            transform: translateY(100vh);
            opacity: 0;
        }
    }
    
    @keyframes flash {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
    }
    
    @keyframes burstOut {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(calc(var(--endX) - 50%), calc(var(--endY) - 50%)) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);