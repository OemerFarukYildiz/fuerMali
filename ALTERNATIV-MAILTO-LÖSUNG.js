// 📧 ALTERNATIVE: Einfache mailto: Lösung (kein EmailJS Setup nötig)
// Diese Lösung öffnet direkt das Standard-E-Mail-Programm

// Ersetze in date-booking.js die sendDateRequest Funktion mit:

async function sendDateRequest(requestData) {
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Deine E-Mail-Adresse hier eintragen:
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
    
    return Promise.resolve({ status: 200, text: 'Email client opened' });
}

// VORTEILE:
// ✅ Kein EmailJS Setup nötig
// ✅ Funktioniert sofort
// ✅ Nutzer sieht den Inhalt

// NACHTEILE:
// ❌ Öffnet E-Mail-Programm (nicht automatisch gesendet)
// ❌ Weniger professionell
// ❌ Funktioniert nicht auf allen Geräten gleich