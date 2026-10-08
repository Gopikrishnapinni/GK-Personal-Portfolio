# Gopikrishna Pinni — Portfolio

Personal portfolio website for **Gopikrishna Pinni**, a DevOps Engineer and Java backend developer. The site presents professional experience, cloud and backend skills, featured work, education, contact links, and a downloadable resume.

## Features

- Responsive single-page portfolio layout
- Sections for About, Experience, Skills, Work, Education, and Contact
- Featured project cards with GitHub links
- Latest public repositories loaded from the GitHub API
- Downloadable resume from `public/Gopikrishna-Pinni-Resume.pdf`
- Mobile navigation menu
- Vite-powered development and production builds

## Tech stack

- React 19
- React DOM 19
- Vite 7
- JavaScript (JSX)
- CSS

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local development URL in the terminal, usually `http://localhost:5173`.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project structure

```text
.
├── public/
│   └── Gopikrishna-Pinni-Resume.pdf
├── src/
│   ├── App.jsx       # Portfolio sections and GitHub repository feed
│   └── main.jsx      # React entry point
├── index.html        # HTML shell and page metadata
├── styles.css        # Global portfolio styles
└── package.json
```

## GitHub repository feed

The Work section requests public repositories from:

```text
https://api.github.com/users/Gopikrishnapinni/repos
```

If the GitHub API is unavailable, the page displays a fallback link to the complete repository collection.

## Customization

- Update personal content and portfolio sections in `src/App.jsx`.
- Update colors, typography, responsive behavior, and layout in `styles.css`.
- Replace the resume at `public/Gopikrishna-Pinni-Resume.pdf` while keeping the same filename, or update the link in `src/App.jsx`.
- Update page title and metadata in `index.html`.
