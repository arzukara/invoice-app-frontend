# Invoice App - MERN Project - Frontend

This repository contains the frontend (client-side) code for the MERN stack application.

The frontend is deployed on an AWS EC2 instance using GitHub Actions for continuous deployment.

Live: [https://minathen.com](https://minathen.com)  

## Overview

This frontend is built using:
- **React.js**: JavaScript library for building user interfaces.
- **Redux**: State management library.

The frontend interacts with the backend via RESTful API and displays data to the user.

## Installation

### Prerequisites
- Node.js installed on your machine.

### Steps

1. Clone the repository:
   ```
   git clone https://github.com/arzukara/invoice-app-frontend.git
   cd invoice-app-frontend
   ```
2. Install dependencies:
    ```
    npm install
    ```
3. Configure environment variables:<br/>
    Edit the file named .env.example as .env or create a .env file in the root directory.
    ```
    REACT_APP_NODE_ENV = development
    REACT_APP_LOCAL_BASE_URL = http://localhost:5050
    REACT_APP_SERVER_BASE_URL = https://api.minathen.com
    ```
4. Start the development server:
    ```
    npm run dev
    ```
5. Open your browser and navigate to http://localhost:3000 to view the application.
