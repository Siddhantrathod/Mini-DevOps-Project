# Task Manager Application

A simple task manager application built with Node.js, Express, and EJS.

## Features

- Create new tasks
- Mark tasks as completed
- Delete tasks
- Responsive design

## Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository or download the source code

2. Navigate to the project directory
   ```
   cd Mini-DevOps-project
   ```

3. Install dependencies
   ```
   npm install
   ```

## Running the Application

### Production Mode

```
npm start
```

### Development Mode (requires nodemon)

First, install nodemon globally (if not already installed):
```
npm install -g nodemon
```

Then run the application in development mode:
```
npm run dev
```

The application will be available at http://localhost:3000

## Project Structure

```
├── index.js           # Main application file
├── package.json       # Project dependencies and scripts
├── public/            # Static assets
│   └── css/           # CSS stylesheets
│       └── style.css  # Main stylesheet
└── views/             # EJS templates
    └── index.ejs      # Main page template
```

## How It Works

- The application uses Express.js as the web server framework
- EJS is used as the templating engine for rendering HTML
- Tasks are stored in memory (data is lost when the server restarts)
- The UI is styled with CSS for a responsive design

## Future Improvements

- Add persistent storage (database)
- Implement user authentication
- Add task categories and priorities
- Add due dates for tasks
- Implement task filtering and sorting