# TIC-TAC-TOE

A simple and modern Tic-Tac-Toe web application built with React, Vite, and TypeScript.  
This project was created to practice frontend development concepts, component-based architecture, and interactive game logic.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5-purple?logo=vite)

---

## Overview

TIC-TAC-TOE is a classic two-player game where users take turns marking spaces in a 3×3 grid using **X** and **O**.  
The first player to align three marks horizontally, vertically, or diagonally wins the match.

This project focuses on clean UI design, responsive interaction, and efficient state management using React.

---

## Features

- Two-player turn-based gameplay
- Win detection system
- Draw detection
- Restart game option
- Interactive and responsive interface
- Fast development environment with Vite
- Built with reusable React components
- Type safety using TypeScript

---

## Technologies Used

- **React** – User interface library
- **Vite** – Fast build tool and development server
- **TypeScript** – Static typing for JavaScript
- **CSS** – Styling and layout

---

## Installation

### Prerequisites

Make sure you have installed:

- Node.js 18+
- npm

### Clone the repository

```sh
git clone https://github.com/AlejaR522/02-tic-tac-toe.git
cd tic-tac-toe
```

---

### Install dependencies

```sh
npm install
```

---

### Run the development server

```sh
npm run dev
```

---

### The project will be available at:

```sh
http://localhost:5173
```

---

## Available Scripts

```sh
npm run dev       # Start development server
npm run build     # Build project for production
npm run preview   # Preview production build
npm run lint      # Run ESLint

```

---


## Project Structure
 
```
02-TIC-TAC-TOE/
├── public/
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Square.jsx
│   │   └── WinnerModal.jsx
│   │
│   ├── logic/
│   │   └── board.js
│   │
│   ├── constants.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```


### How to Play

- Player 1 uses X
- Player 2 uses O
- Players take turns selecting empty squares
- The first player to align three symbols wins
- If the board is full and nobody wins, the result is a draw

 ---


### Learning Goals

- This project was created to practice:

- React components
- Props
- useState
- Conditional rendering
- Event handling
- Array logic
- Win condition algorithms
- Project structure in React

--- 

### License

- This project is open source and available under the MIT License.

---

### Author

Developed by Alejandra Ruiz