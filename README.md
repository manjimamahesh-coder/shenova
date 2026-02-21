# SHENOVA 🛡️ – Women's Safety & Empowerment Platform

> "She walks with confidence because she knows she's never alone"

A responsive, modern landing page for the SHENOVA women's safety platform — built with pure HTML, CSS, and vanilla JavaScript. No frameworks, no build tools — just open the browser and go.

---

## 🗂️ Project Structure

```
shenova/
├── index.html          ← Main page (all sections)
├── css/
│   └── style.css       ← All styles + responsive design
├── js/
│   └── main.js         ← Interactions & animations
└── README.md
```

---

## 🚀 Step-by-Step: Running Locally

### Step 1 – Clone the repo (once it's on GitHub)
```bash
git clone https://github.com/YOUR_USERNAME/shenova.git
cd shenova
```

### Step 2 – Open in browser
Simply open `index.html` in any browser:
```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

**Or use VS Code Live Server:**
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**

---

## 📤 Step-by-Step: Publishing to GitHub

### Step 1 – Create a new GitHub repository
1. Go to [github.com/new](https://github.com/new)
2. Name it `shenova`
3. Leave it **Public** (or Private)
4. Do **NOT** initialize with README (you already have one)
5. Click **Create repository**

### Step 2 – Initialize Git locally
```bash
cd shenova        # make sure you're in the project folder
git init
git add .
git commit -m "Initial commit: SHENOVA landing page"
```

### Step 3 – Connect to GitHub and push
```bash
git remote add origin https://github.com/YOUR_USERNAME/shenova.git
git branch -M main
git push -u origin main
```
> Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 4 – Enable GitHub Pages (free hosting!)
1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select `main` branch → `/ (root)`
4. Click **Save**
5. Your site will be live at:  
   `https://YOUR_USERNAME.github.io/shenova`

---

## ✏️ Customizing the Site

| What to change | Where to edit |
|---|---|
| Colors / fonts | `css/style.css` → `:root` variables at the top |
| Hero text & stats | `index.html` → `.hero` section |
| Feature cards | `index.html` → `.features` section |
| Resource cards | `index.html` → `.resources` section |
| Contact email | `index.html` → `.contact-item` |
| Form submission logic | `js/main.js` → form event listeners |

---

## 🌐 Sections Included

| Section | Description |
|---|---|
| **Navbar** | Fixed, scroll-aware with mobile hamburger menu |
| **Hero** | Full split-layout with stats counter |
| **Mission** | About section with 3 pillars |
| **Features** | 6-card grid (Emergency SOS, Safe Routes, etc.) |
| **Resources** | 4 image cards with hover overlays |
| **CTA** | Email signup with gradient background |
| **Contact** | Contact form + info |
| **Footer** | Links, social icons, branding |

---

## 🧰 Technologies Used

- **HTML5** – Semantic structure
- **CSS3** – Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** – Scroll effects, form handling, IntersectionObserver
- **Google Fonts** – Playfair Display + DM Sans

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| Desktop (> 1024px) | Full 2-column layouts |
| Tablet (768–1024px) | 2-col features, stacked hero |
| Mobile (< 768px) | Single column, hamburger nav |

---

## 🔮 Future Enhancements

- [ ] Backend integration for real email signup (e.g., Mailchimp API)
- [ ] User authentication + dashboard
- [ ] Emergency SOS map integration (Google Maps API)
- [ ] Community forum / chat feature
- [ ] Multi-language support

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

Built with ❤️ for every woman's safety.
