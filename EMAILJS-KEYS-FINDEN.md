# 🔍 EmailJS Keys finden - Schritt für Schritt

## 🚀 Schritt 1: EmailJS Account erstellen
1. Gehe zu **https://www.emailjs.com/**
2. Klicke **"Sign Up Free"**
3. Registriere dich mit deiner E-Mail
4. **Bestätige deine E-Mail** (wichtig!)

## 🔑 Schritt 2: Public Key finden
1. **Login** in dein EmailJS Dashboard
2. Links in der Sidebar: **"Account"** klicken
3. Dann **"General"** klicken
4. Dort findest du: **"Public Key"**
   - Sieht aus wie: `user_abc123xyz`
   - **KOPIEREN** und notieren! 📝

## 📧 Schritt 3: Service ID bekommen
1. Links in der Sidebar: **"Email Services"** klicken
2. **"Add New Service"** klicken
3. **Gmail** auswählen (oder deinen E-Mail-Anbieter)
4. **Dein Gmail-Konto verbinden** (OAuth)
5. Service-Name eingeben: z.B. "Date Requests"
6. **"Create"** klicken
7. Jetzt siehst du die **Service ID**: `service_gmail123`
   - **KOPIEREN** und notieren! 📝

## 📝 Schritt 4: Template ID bekommen
1. Links in der Sidebar: **"Email Templates"** klicken
2. **"Create New Template"** klicken
3. **Template bearbeiten:**
   - **TO**: Deine E-Mail-Adresse (wohin die E-Mails sollen)
   - **SUBJECT**: `💕 New Date Request: {{date_type}}`
   - **Content** (Body):
```
🎉 Someone wants to go on a date with you!

📋 Date Details:
🎯 Date Type: {{date_type}}
📅 Date: {{date}}
🕐 Time: {{time}}

💌 Message:
{{note}}

Looking forward to your response! 💕
```
4. **"Save"** klicken
5. Jetzt siehst du die **Template ID**: `template_abc123`
   - **KOPIEREN** und notieren! 📝

## ✅ Dann in deinem Code einfügen:

**In `date-booking.js` Zeile 2:**
```javascript
emailjs.init("HIER_DEIN_PUBLIC_KEY");
```

**In `date-booking.js` Zeile 148-151:**
```javascript
const response = await emailjs.send(
    'HIER_DEINE_SERVICE_ID',    
    'HIER_DEINE_TEMPLATE_ID',   
    templateParams
);
```

## 🎯 Beispiel mit echten Werten:
```javascript
emailjs.init("user_abc123xyz");

const response = await emailjs.send(
    'service_gmail123',    
    'template_abc123',   
    templateParams
);
```

## 💡 Tipp:
- Alle IDs sind **KOSTENLOS**
- Du bekommst **200 E-Mails pro Monat** gratis
- Die Keys sind **öffentlich sicher** (können in den Code)

## ❓ Probleme?
- **Keys nicht gefunden?** → Account-Bestätigung checken
- **Gmail verbinden klappt nicht?** → 2-Faktor-Authentifizierung temporär ausschalten
- **Template funktioniert nicht?** → Variablen {{date_type}} etc. prüfen