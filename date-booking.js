// Initialize EmailJS
emailjs.init("s-_UyjGmfRGMXir4q"); // Dein Public Key ist jetzt eingesetzt!

// Date information
const dateInfo = {
    movie: {
        title: 'Movie Date 🎬',
        description: 'Going to the cinema together',
        suggestions: 'We can watch romantic comedies, action movies, or whatever you like!',
        icon: '🎬'
    },
    paint: {
        title: 'Paint Date 🎨',
        description: 'Painting and being creative together',
        suggestions: 'We can paint on canvases or get a paint-by-numbers set!',
        icon: '🎨'
    },
    clay: {
        title: 'Pottery Date 🏺',
        description: 'Making beautiful things with clay',
        suggestions: 'We can go to a pottery studio or experiment with clay at home!',
        icon: '🏺'
    },
    'lego-picnic': {
        title: 'Lego & Picnic 🧱',
        description: 'Building Lego and having a picnic in the park',
        suggestions: 'Bring a big Lego set and delicious snacks for the picnic!',
        icon: '🧱'
    },
    puzzle: {
        title: 'Puzzle Date 🧩',
        description: 'Puzzling together cozily',
        suggestions: 'Pick a beautiful 1000-piece puzzle and relax together!',
        icon: '🧩'
    },
    'custom-idea': {
        title: 'Your Idea 💡',
        description: 'You have a better idea for our date',
        suggestions: 'Tell me what you\'d like to do - I\'m open to anything!',
        icon: '💡'
    }
};

// Load selected date type when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadSelectedDate();
    setMinDate();
    setupFormHandling();
    createFloatingHearts();
});

function loadSelectedDate() {
    const selectedDateType = localStorage.getItem('selectedDateType');
    if (selectedDateType && dateInfo[selectedDateType]) {
        const info = dateInfo[selectedDateType];
        
        // Update page title and description
        document.getElementById('dateTitle').textContent = info.title;
        document.getElementById('dateDescription').textContent = info.description;
        
        // Update date preview
        const datePreview = document.getElementById('datePreview');
        datePreview.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 1rem;">${info.icon}</div>
            <h2>${info.title}</h2>
            <p>${info.description}</p>
            <p class="suggestions">${info.suggestions}</p>
        `;
    } else {
        // Fallback if no date type selected
        document.getElementById('dateTitle').textContent = 'Date Buchung 💕';
        document.getElementById('dateDescription').textContent = 'Lass uns ein tolles Date planen!';
    }
}

function setMinDate() {
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('dateInput').setAttribute('min', today);
    
    // Set default time to 18:00
    document.getElementById('timeInput').value = '18:00';
}

function setupFormHandling() {
    const form = document.getElementById('bookingForm');
    form.addEventListener('submit', handleFormSubmit);
}

async function handleFormSubmit(event) {
    event.preventDefault();
    
    const submitButton = document.querySelector('.submit-button');
    const buttonText = document.querySelector('.button-text');
    const buttonLoading = document.querySelector('.button-loading');
    
    // Show loading state
    submitButton.disabled = true;
    buttonText.style.display = 'none';
    buttonLoading.style.display = 'inline';
    
    try {
        // Get form data
        const formData = new FormData(event.target);
        const selectedDateType = localStorage.getItem('selectedDateType');
        const dateTypeInfo = dateInfo[selectedDateType] || { title: 'Special Date', icon: '💕' };
        
        // Format the request content
        const requestData = {
            date_type: dateTypeInfo.title,
            date: formatDate(formData.get('date')),
            time: formData.get('time'),
            note: formData.get('note') || 'No special wishes',
            icon: dateTypeInfo.icon
        };
        
        // Process date request
        // Note: You'll need to set up EmailJS service and replace with your actual service/template IDs
        await sendDateRequest(requestData);
        
        // Show success message
        showSuccessMessage();
        
    } catch (error) {
        console.error('Error sending date request:', error);
        showErrorMessage();
    } finally {
        // Reset button state
        submitButton.disabled = false;
        buttonText.style.display = 'inline';
        buttonLoading.style.display = 'none';
    }
}

async function sendDateRequest(requestData) {
    // ECHTE EmailJS Implementation
    try {
        const templateParams = {
            date_type: requestData.date_type,
            date: requestData.date,
            time: requestData.time,
            note: requestData.note || 'No special message',
            from_name: 'Someone special', // Du kannst das anpassen
            reply_to: 'noreply@example.com' // Optional
        };

        // Deine echten EmailJS IDs:
        const response = await emailjs.send(
            'service_7bsxupt',    // Deine Service ID
            'template_4mpu8fj',   // Deine Template ID
            templateParams
        );

        console.log('✅ E-Mail erfolgreich gesendet!', response);
        return response;
        
    } catch (error) {
        console.error('❌ Fehler beim E-Mail versenden:', error);
        throw error;
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

function showSuccessMessage() {
    const form = document.getElementById('bookingForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    form.style.display = 'none';
    errorMessage.style.display = 'none';
    successMessage.style.display = 'block';
    
    // Create celebration effects
    createCelebration();
    
    // Redirect to final emotional page after a delay
    setTimeout(() => {
        window.location.href = 'final-page.html';
    }, 3000);
}

function showErrorMessage() {
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');
    
    successMessage.style.display = 'none';
    errorMessage.style.display = 'block';
}

function hideError() {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.display = 'none';
}

// selectNewDate function removed - no longer needed

function goBack() {
    window.location.href = 'date-selection.html';
}

function createFloatingHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = ['💖', '💕', '💗'][Math.floor(Math.random() * 3)];
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.bottom = '-50px';
        heart.style.fontSize = '1.2rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.style.animation = 'floatUp 4s linear forwards';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            if (document.body.contains(heart)) {
                document.body.removeChild(heart);
            }
        }, 4000);
    }, 3000);
}

function createCelebration() {
    // Create confetti effect
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            const symbols = ['🎉', '🎊', '💖', '💕', '💗', '🌟', '⭐', '✨', '🎈'];
            
            confetti.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-50px';
            confetti.style.fontSize = (Math.random() * 20 + 15) + 'px';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1001';
            confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                if (document.body.contains(confetti)) {
                    document.body.removeChild(confetti);
                }
            }, 5000);
        }, i * 100);
    }
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

// Instructions for EmailJS Setup (for the user)
console.log(`
📧 E-MAIL OPTIONEN:

OPTION 1 - EmailJS (Automatische E-Mails):
1. Folge der EMAILJS-SETUP-ANLEITUNG.md Datei
2. Ersetze die IDs in diesem Code

OPTION 2 - Sofortige mailto-Lösung:
1. Ändere nur deine E-Mail-Adresse in der sendViaMailto Funktion
2. Ersetze sendDateRequest() mit sendViaMailto()

Aktuell: E-Mails werden nur in der Console angezeigt.
`);

// 🚀 SOFORTIGE LÖSUNG: mailto (Ersetze nur deine E-Mail-Adresse!)
function sendViaMailto(requestData) {
    // 👇 HIER DEINE E-MAIL EINTRAGEN:
    const YOUR_EMAIL = "deine-email@gmail.com";
    
    const subject = encodeURIComponent(`💕 Date Request: ${requestData.date_type}`);
    const body = encodeURIComponent(`
🎉 Someone wants to go on a date with you!

📋 Date Details:
🎯 Date Type: ${requestData.date_type}
📅 Date: ${requestData.date}
🕐 Time: ${requestData.time}

💌 Message:
${requestData.note}

Looking forward to your response! 💕
    `);
    
    // E-Mail-Programm öffnen
    window.location.href = `mailto:${YOUR_EMAIL}?subject=${subject}&body=${body}`;
    
    // Um diese Lösung zu nutzen, ersetze in der handleFormSubmit Funktion:
    // await sendDateRequest(requestData);
    // mit:
    // await sendViaMailto(requestData);
}