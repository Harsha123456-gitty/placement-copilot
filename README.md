# PLACEMENT_OS // ADAPTIVE AI PLACEMENT ENGINE

> **An innovative, adaptive placement-preparation platform that assesses student skills, identifies weaknesses, generates targeted 30-minute practice paths, provides zero-anxiety focus sanctuary, and rescues student attention whenever they get stuck or distracted.**

---

## 🌟 Key Innovations & Value Proposition

- **ASSESS → IDENTIFY WEAKNESS → TARGETED PRACTICE → ATTENTION RESCUE → REASSESS → MEASURABLE GROWTH**
- **Personal Performance Metrics**: Tracks total study hours, 12-day streaks, confidence scoring engine (0-100%), and historical assessment growth curves (+32%).
- **🛟 Attention Rescue Protocol (`[RESCUE MY FOCUS]`)**: Zero-judgment recovery station offering:
  - *Option 1 — Micro-Split MCQ*: 30-sec diagnostic quiz to rebuild instant momentum.
  - *Option 2 — Socratic Hint*: Conceptual clue without spoiling full answers.
  - *Option 3 — 60-Sec Breathing Reset*: Mindful visual breathing exercise.
- **Smart Focus Recommendation Engine**: Curated 5-min concept video lectures, pattern code templates, target practice workspace, and key pitfalls checklist.
- **Full-Stack REST API Backend (`server.js`)**: Built with Node.js, Express, and Google Gemini API integration.

---

## 🛠️ Tech Stack & Architecture

- **Frontend**: HTML5, React 18, Tailwind CSS, Space Grotesk / Orbitron Fonts, Glassmorphism HUD Design.
- **Backend API**: Node.js, Express.js REST API (`server.js`), Google Gemini API.
- **Deployment**: Google Cloud Run (`Dockerfile`), Firebase Hosting (`firebase.json`), GitHub Pages (`index_standalone.html`).

---

## 🚀 Quick Start (Local & Web)

### 1. Instant Zero-Dependency Browser Run
Double-click `index_standalone.html` or open in any browser!

### 2. Full-Stack Node.js Backend Server
```bash
# Install dependencies & run backend server
npm install
node server.js
```
Backend API will launch on `http://localhost:5000`.

### 3. Deploy to Google Cloud Run
```bash
gcloud run deploy placement-copilot --source . --platform managed --allow-unauthenticated --region us-central1
```

---

## 📄 License
MIT License • Built for Hackathon Placement Preparation Challenge.
