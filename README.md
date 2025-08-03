# Website Builder Card UI

This is a simple frontend project that dynamically generates card components using HTML, CSS, and JavaScript. Each card represents a video-like UI block with thumbnail, title, creator name, views, posted date, and duration — similar to a YouTube-style layout.

## 🚀 Features

- Responsive layout using Flexbox and Grid.
- Dynamically generates cards using JavaScript.
- View and time formatting (e.g., "5k", "2M", "1 year ago").
- Clean and minimalistic design.
- Easy to extend and customize.

## 🛠️ Tech Stack

- HTML5
- CSS3 (Flexbox + Grid)
- Vanilla JavaScript

## 📁 Project Structure

project-folder/
│
├── index.html # Main HTML file
├── style.css # Styling for the card components
├── script.js # JavaScript logic for card generation
└── README.md # Project documentation


## 📸 Card Component Breakdown

Each card contains:
- **Thumbnail** (with time badge)
- **Title**
- **Creator name**
- **Views** (formatted in `k`, `M`, or `Cr`)
- **Posted time** (formatted in `months ago` or `year ago`)

## 📦 How to Use

1. Clone the repository or download the files.
2. Open `index.html` in your browser.
3. You can call `createCard()` function in `script.js` like this:

```javascript
createCard(
  "How to Build a Website UI",
  "Avinash Shelar",
  15000,
  14,
  "5:20",
  "https://example.com/thumbnail.jpg"
);

You can call this function multiple times with different data to generate multiple cards.

🧠 To-Do / Improvements
Add responsiveness for mobile view.

Add animations on hover.

Allow user input to dynamically create cards from form.

