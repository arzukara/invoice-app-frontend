# Invoice App - MERN Project - Frontend

This repository contains the frontend (client-side) code for the MERN stack application.

The frontend is deployed on an AWS EC2 instance using GitHub Actions for continuous deployment.

Live: [https://minathen-invoice-app.netlify.app](https://minathen-invoice-app.netlify.app)  
Live: [https://invoice-app-frontend.onrender.com](https://invoice-app-frontend.onrender.com)

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
    Create a .env file in the root directory. Project requires a url to connect mongodb.
    For more info and example =>[How to Use MERN Stack: A Complete Guide](https://www.mongodb.com/resources/languages/mern-stack-tutorial)
    ```
    REACT_APP_NODE_ENV = development
    REACT_APP_LOCAL_BASE_URL = http://localhost:5050
    REACT_APP_SERVER_BASE_URL = http://localhost:5050
    ```
4. Start the development server:
    ```
    npm run dev
    ```
5. Open your browser and navigate to http://localhost:3000 to view the application.
