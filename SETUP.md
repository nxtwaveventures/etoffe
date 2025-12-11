# Étoffe - Setup Guide

## Google Form Setup

### Step 1: Create the Form
1. Go to [forms.google.com](https://forms.google.com)
2. Click **"+ Blank"** to create a new form
3. Title: **"Your Personalized Banarasi Saree Experience – Étoffe"**
4. Description: "Design your personalized Banarasi saree with Étoffe. We'll curate 3-7 options based on your preferences."

### Step 2: Add Questions (Copy exactly as shown)

**SECTION 1 — About You**

1. Full Name (Short answer, Required)
2. Email Address (Short answer, Required)
3. WhatsApp Number (with country code) (Short answer, Required)
4. Country + City (Short answer, Required)
5. Have you ever worn or purchased a Banarasi saree before? (Multiple choice)
   - Yes
   - No
   - I've seen them but never worn
   - Completely new to Banarasi
6. Occasion for which you want the Banarasi (Checkboxes)
   - Wedding (own)
   - Wedding guest
   - Cultural/festive event
   - Photoshoot
   - Traditional ceremony
   - Gift
   - Collector piece
   - Just exploring

**SECTION 2 — Banarasi Style Preferences**

7. What type of Banarasi are you looking for? (Multiple choice)
   - Pure silk Banarasi
   - Katan
   - Organza Banarasi
   - Georgette Banarasi
   - Unsure — recommend based on my needs
8. Preferred weave style (Checkboxes)
   - Kadwa
   - Jangla
   - Butidar
   - Tilfi
   - Tanchoi
   - Brocade
   - Open to anything beautiful
9. Preferred fabric feel (Multiple choice)
   - Lightweight
   - Traditional rich & heavy
   - Modern minimal
   - Statement piece
   - Not sure — show me options

**SECTION 3 — Colour & Aesthetic**

10. Your skin undertone (optional) (Multiple choice)
    - Warm
    - Cool
    - Neutral
    - I don't know
11. Colours you love for your Banarasi (Checkboxes)
    - Red
    - Maroon
    - Rani pink
    - Peach
    - Pastel pink
    - Gold
    - Green
    - Blue
    - Purple
    - Black
    - White / Off-white
    - Champagne / Beige
    - Jewel tones
    - Open to all
12. Colours you want to avoid (Short answer, Optional)
13. Would you like recommendations based on: (Checkboxes)
    - Skin tone
    - Zodiac/Nakshatra colours
    - Occasion tradition
    - Global fashion palette
    - All of the above
    - No, I'll choose myself
14. Describe the kind of Banarasi vibe you want (Paragraph, Optional)
    - Examples: classic bridal, vintage royal, soft pastel, Parisian minimal, bold contrast

**SECTION 4 — Custom Weave Option**

15. Are you interested in a Banarasi woven exclusively for you? (Multiple choice)
    - Yes
    - Maybe, tell me more
    - No, I prefer ready options
16. Your preferred craftsmanship level (Multiple choice)
    - Everyday luxury
    - Mid-range Kadwa
    - Pure zari (silver/gold)
    - Heirloom masterpiece
    - Not sure
17. Timeline for delivery (Multiple choice)
    - 1–2 weeks (ready options)
    - 1 month
    - 2–3 months
    - 3–4 months
    - No rush — it's for my collection
    - Just browsing

**SECTION 5 — Budget**

18. Your budget range (USD) (Multiple choice)
    - $150–250
    - $250–400
    - $400–700
    - $700–1500
    - $1500+ (custom heirloom)
    - Still exploring

**SECTION 6 — Shipping & Contact**

19. Country for shipping (Short answer, Required)
20. How would you like to receive your personalised saree shortlist? (Multiple choice)
    - Email
    - WhatsApp
21. Timezone / best time to contact you (Short answer, Optional)

**SECTION 7 — Final Notes**

22. Is there anything else you'd like us to consider? (Paragraph, Optional)
23. May we send you a curated shortlist of 3–7 Banarasi sarees with details & prices? (Multiple choice, Required)
    - Yes
    - Yes, and include styling suggestions
    - Not right now

### Step 3: Get the Form ID
1. Click **"Send"** button (top right)
2. Click the **Link** icon (🔗)
3. Copy the URL - it looks like:
   ```
   https://docs.google.com/forms/d/146twyrK6TTYFimdz1rvaugUokbd088dqBfSEvsCm9gc/viewform
   ```
4. Copy only the ID part between `/d/` and `/viewform`

### Step 4: Add to Environment Variables

1. Open `.env.local` file
2. Paste your Form ID:
   ```
   NEXT_PUBLIC_GOOGLE_FORM_ID=146twyrK6TTYFimdz1rvaugUokbd088dqBfSEvsCm9gc
   ```
3. Add your WhatsApp number (with country code):
   ```
   NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
   ```

### Step 5: Test Locally
```bash
npm run dev
```
Visit http://localhost:3000/get-started

### Step 6: Set Up Automated Email Responses

1. **Open Google Form** → Click the three dots (⋮) → **Script editor**

2. **Delete any existing code** and paste this:

```javascript
function onFormSubmit(e) {
  // ---- YOUR SETTINGS ----
  const OWNER_EMAIL = "your-email@example.com";   // Replace with your email
  const BRAND_NAME = "Étoffe – Banarasi Studio"; 
  const REPLY_EMAIL_SUBJECT = "Thank you for your inquiry – Étoffe Banarasi";
  
  // ---- GET USER RESPONSES ----
  const responses = e.response.getItemResponses();
  let userEmail = "";
  let userWhatsapp = "";
  let messageBody = "Here are the details they submitted:\n\n";
  
  for (let i = 0; i < responses.length; i++) {
    let question = responses[i].getItem().getTitle();
    let answer = responses[i].getResponse();
    
    // capture email and whatsapp
    if (question.toLowerCase().includes("email")) {
      userEmail = answer;
    }
    if (question.toLowerCase().includes("whatsapp")) {
      userWhatsapp = answer;
    }
    
    messageBody += question + ": " + answer + "\n";
  }
  
  // ---- SEND AUTO EMAIL TO USER ----
  if (userEmail) {
    const replyBody =
      "Hello from Étoffe,\n\n" +
      "Thank you for sharing your preferences with us.\n" +
      "Our designers are now reviewing your request and will prepare a\n" +
      "personalised curated shortlist of Banarasi sarees for you.\n\n" +
      "You will receive:\n" +
      "• 3–7 curated Banarasi options\n" +
      "• Close-up weave photos/videos\n" +
      "• Pricing in USD\n" +
      "• Delivery timeline\n" +
      "• Styling guidance (colour/tone matching)\n\n" +
      "We will contact you within 24–48 hours on the platform you selected.\n\n" +
      "Warm regards,\n" +
      BRAND_NAME;
    
    MailApp.sendEmail({
      to: userEmail,
      subject: REPLY_EMAIL_SUBJECT,
      body: replyBody
    });
  }
  
  // ---- SEND NOTIFICATION TO OWNER ----
  MailApp.sendEmail({
    to: OWNER_EMAIL,
    subject: "New Étoffe Inquiry Received",
    body: "You received a new inquiry on your Banarasi form.\n\n" + messageBody
  });
}
```

3. **Update `OWNER_EMAIL`** with your actual email address

4. **Save** (disk icon or Ctrl/Cmd + S)

5. **Set up trigger**:
   - Click **clock icon** (Triggers) on the left sidebar
   - Click **+ Add Trigger** (bottom right)
   - Settings:
     - Function: `onFormSubmit`
     - Event source: `From form`
     - Event type: `On form submit`
   - Click **Save**
   - Grant permissions when prompted

6. **Test**: Submit the form once to verify emails are sent

### Step 7: Deploy to Vercel
1. Push changes to GitHub:
   ```bash
   git add .
   git commit -m "Add optimized code and Google Form setup"
   git push etoffe main
   ```

2. In Vercel Dashboard:
   - Go to Project Settings → Environment Variables
   - Add:
     - `NEXT_PUBLIC_GOOGLE_FORM_ID` = your form ID
     - `NEXT_PUBLIC_WHATSAPP_NUMBER` = 918123340481
   - Redeploy

## Email Setup

Update email in:
- `/src/app/get-started/page.tsx` if showing fallback
- Google Apps Script `OWNER_EMAIL` variable

Current WhatsApp: `918123340481`

## Domain Setup

See main README for Vercel + GoDaddy domain connection.
