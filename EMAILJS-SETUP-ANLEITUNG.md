# 📧 EmailJS Setup - Komplette Anleitung

## 🎯 Was du brauchst:
1. **Service ID** (aus EmailJS Dashboard)
2. **Template ID** (aus EmailJS Dashboard) 
3. **Public Key** (aus EmailJS Account Settings)

## 📋 Schritt-für-Schritt Anleitung:

### 1. EmailJS Account Setup
- Gehe zu https://www.emailjs.com/
- **Sign Up Free** klicken
- E-Mail bestätigen

### 2. Gmail Service verbinden
- Im Dashboard: **Email Services** → **Add New Service**
- **Gmail** auswählen
- Dein Gmail-Konto verbinden (OAuth)
- Service Name: "Date Requests" 
- **Service ID merken** (z.B. `service_abc123`)

### 3. E-Mail Template erstellen
- **Email Templates** → **Create New Template**
- **TO**: Deine E-Mail-Adresse eingeben
- **Subject**: `💕 New Date Request: {{date_type}}`
- **Content**:
```
🎉 Jemand möchte ein Date mit dir!

📋 Date Details:
🎯 Date Type: {{date_type}}
📅 Date: {{date}}
🕐 Time: {{time}}

💌 Nachricht:
{{note}}

Antworte einfach auf diese E-Mail! 💕
```
- **Template ID merken** (z.B. `template_xyz789`)

### 4. Public Key finden
- **Account** → **General Settings** 
- **Public Key** kopieren (z.B. `user_123abc`)

### 5. Code anpassen in `date-booking.js`:

**Zeile 2:**
```javascript
emailjs.init("DEIN_PUBLIC_KEY_HIER");
```

**Zeile 148-151:**
```javascript
const response = await emailjs.send(
    'DEIN_SERVICE_ID_HIER',    // z.B. 'service_abc123'
    'DEIN_TEMPLATE_ID_HIER',   // z.B. 'template_xyz789'
    templateParams
);
```

## ✅ Test:
1. Deine Website öffnen
2. Date auswählen und Formular ausfüllen
3. **Send Date Request** klicken
4. In deinem Gmail-Posteingang nach der E-Mail schauen!

## 🆓 Kostenlose Limits:
- **200 E-Mails pro Monat** kostenlos
- Für mehr: Upgrade zu bezahltem Plan

## 🔧 Troubleshooting:
- **Fehler**: IDs nochmal überprüfen
- **Keine E-Mail**: Spam-Ordner checken
- **Console öffnen** (F12) für Fehlermeldungen

## 📱 Alternative - einfacher:
Falls EmailJS zu kompliziert ist, kann ich auch eine **mailto:** Lösung machen, die direkt dein E-Mail-Programm öffnet!