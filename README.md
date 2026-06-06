# My Meal DB

My Meal DB is a web application for managing and discovering recipes. Users can search for meals, view details like ingredients and preparation instructions, and manage recipes through a simple interface.

This project was developed as part of **Module 294 — Frontend einer interaktiven Webapplikation realisieren** at school, with the goal of building a functional frontend application connected to a REST API.

---

## Documentation

> **Note:** All documentation is written in German.

- [Projektdokumentation (Markdown)](./Dokumentation/projektdokumentation.md)
- [Projektdokumentation (PDF)](./projektdokumentation.pdf)

---

## Tech Stack

- **Framework** - React 19 
- **Build Tool** - Vite 
- **Routing** - React Router DOM 
- **Styling** - Bootstrap 5, Bootstrap Icons 
- **Backend** - json-server 
- **Testing** - Vitest, React Testing Library 
- **Dev Tools** - ESLint, concurrently 

---

## Project directory structure:

```
Directory structure:
└── m294-mymealdb/
    ├── Dokumentation/
    │   ├── Bildschirme-der-my-meal-db.drawio
    │   ├── Klassendiagram.drawio
    │   ├── assets/
    │   └── projektdokumentation.md
    ├── Front-End/
    ├── LICENSE
    ├── README.md
    ├── Ressourcen/
    ├── package-lock.json
    └── package.json
```

---

## Installation

### Prerequisites

- Node.js (Version 18 or higher)
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/MAFernCosta/m294-mymealdb
cd m294-mymealdb
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp Front-End/.env.example Front-End/.env
```

### 4. Start the application

```bash
npm run dev
```

- Frontend: `http://localhost:5173`
- API: `http://localhost:3001`

### Run tests

```bash
npm run test
```

---

## License

This project is licensed under the [MIT License](./LICENSE).