// Progressive messages for the "No" button
const noMessages = [
    "No 😔",
    "Are you sure? 🤔",
    "Really sure?? 😮",
    "Think about it... 💭",
    "Please reconsider! 🥺",
    "I'll be really sad... 😢",
    "You're breaking my heart 💔",
    "Just think how happy we could be! 😊",
    "Pretty please with a cherry on top? 🍒",
    "I promise it'll be worth it! ✨",
    "Come on, just say yes! 😍",
    "You know you want to... 😏",
    "I'm not giving up! 💪",
    "Last chance... 🙏",
    "Ok, I'll keep asking forever! 😤",
    "Ok, you win... just kidding! 😄",
    "PLEASE PLEASE PLEASE! 🙏💕"
];

// GIF variations for different interactions
const gifs = {
    initial: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW5lenZyZHI5OXM2eW95b3pmMG40cWVrMDhtNjVuM3A4dGNxa2g2dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/VM1fcpu2bKs1e2Kdbj/giphy.gif",
    pleading: "https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif",
    crying: "https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif"
};

let noClickCount = 0;
let yesButtonScale = 1;

// Initialize the experience
document.addEventListener('DOMContentLoaded', function() {
    // Add some initial sparkle effects
    createFloatingHearts();
});

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const mainGif = document.getElementById('main-gif');
    
    // Add shake animation to no button
    noButton.classList.add('shake');
    setTimeout(() => noButton.classList.remove('shake'), 500);
    
    // Update the no button text
    if (noClickCount < noMessages.length - 1) {
        noClickCount++;
    }
    noButton.querySelector('span').textContent = noMessages[noClickCount];
    
    // Make the yes button grow larger
    yesButtonScale += 0.1;
    yesButton.style.transform = `scale(${yesButtonScale})`;
    yesButton.classList.add('grow');
    setTimeout(() => yesButton.classList.remove('grow'), 300);
    
    // Change GIF based on interaction count
    if (noClickCount > 5 && noClickCount <= 10) {
        mainGif.src = gifs.pleading;
    } else if (noClickCount > 10) {
        mainGif.src = gifs.crying;
    }
    
    // Add special effects for persistent "no" clicks
    if (noClickCount > 8) {
        noButton.classList.add('changing');
        document.body.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            noButton.classList.remove('changing');
            document.body.style.animation = '';
        }, 500);
    }
    
    // Create floating hearts on multiple no clicks
    if (noClickCount > 3) {
        createFloatingHearts();
    }
}

function handleYesClick() {
    // Add celebration effect
    createCelebration();
    
    // Add a small delay for the celebration effect
    setTimeout(() => {
        window.location.href = "date-selection.html";
    }, 1000);
}

function createFloatingHearts() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💖';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = window.innerHeight + 'px';
            heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1000';
            heart.style.transition = 'all 3s ease-out';
            
            document.body.appendChild(heart);
            
            // Animate the heart floating up
            setTimeout(() => {
                heart.style.top = '-100px';
                heart.style.opacity = '0';
                heart.style.transform = 'translateX(' + (Math.random() * 200 - 100) + 'px)';
            }, 100);
            
            // Remove the heart after animation
            setTimeout(() => {
                document.body.removeChild(heart);
            }, 3100);
        }, i * 200);
    }
}

function createCelebration() {
    const container = document.querySelector('.container');
    
    // Create confetti effect
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            const colors = ['#ff6b9d', '#ffa8d5', '#ff9a9e', '#28a745', '#20c997', '#dc3545', '#fd7e14'];
            const shapes = ['💖', '💕', '💗', '💓', '💝', '🌹', '⭐'];
            
            confetti.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-50px';
            confetti.style.fontSize = (Math.random() * 25 + 15) + 'px';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1001';
            confetti.style.transition = 'all 2s ease-out';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.style.top = window.innerHeight + 100 + 'px';
                confetti.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
                confetti.style.opacity = '0';
            }, 100);
            
            setTimeout(() => {
                if (document.body.contains(confetti)) {
                    document.body.removeChild(confetti);
                }
            }, 2100);
        }, i * 50);
    }
    
    // Add success message overlay
    const successOverlay = document.createElement('div');
    successOverlay.innerHTML = '<h2 style="font-size: 3rem; color: #28a745; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">Yay! 🎉</h2>';
    successOverlay.style.position = 'fixed';
    successOverlay.style.top = '50%';
    successOverlay.style.left = '50%';
    successOverlay.style.transform = 'translate(-50%, -50%)';
    successOverlay.style.zIndex = '1002';
    successOverlay.style.textAlign = 'center';
    
    document.body.appendChild(successOverlay);
    
    setTimeout(() => {
        if (document.body.contains(successOverlay)) {
            document.body.removeChild(successOverlay);
        }
    }, 800);
}

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.querySelector('.yes-button');
    const noButton = document.querySelector('.no-button');
    
    yesButton.addEventListener('mouseenter', function() {
        if (Math.random() > 0.7) { // 30% chance
            createFloatingHearts();
        }
    });
    
    // Add keyboard support
    document.addEventListener('keypress', function(e) {
        if (e.key === 'y' || e.key === 'Y') {
            handleYesClick();
        } else if (e.key === 'n' || e.key === 'N') {
            handleNoClick();
        }
    });
});