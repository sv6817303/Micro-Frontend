# Micro-Frontend Architecture POC

## Overview
This project demonstrates a Proof of Concept (POC) for a Micro-Frontend Architecture using React. It includes:
- **Main Application (Host Application)**: Serves as the wrapper for all micro-applications.
- **Chat Application (Micro-Frontend)**: A standalone application for chat functionality.
- **Email Application (Micro-Frontend)**: A standalone application for email-related functionality.

The main application integrates the chat and email micro-frontends using [Module Federation](https://webpack.js.org/concepts/module-federation/), allowing them to communicate seamlessly and share UI components.

## Tools & Frameworks Used
- **React**: Front-end JavaScript library for building the user interface.
- **Module Federation**: For integrating micro-frontends.
- **Material UI**: For UI components and consistent styling.
- **React Router**: For routing and navigation.
- **Vite**: For fast development and build.

## Architecture
This project is built around a micro-frontend architecture with the following structure:
- **Main (Host) Application**: Manages the design system and shared components.
- **Micro-Frontends**:
  - **Chat Micro-Frontend**: A standalone application responsible for chat functionality.
  - **Email Micro-Frontend**: A standalone application responsible for email functionality.

### Communication between Micro-Frontends
- **EventBus**: Used for communication between the main application and the micro-frontends. Events like `new-message` are emitted and handled across different parts of the app.
- **Shared Components**: The main application shares reusable components (like buttons and input fields) with the micro-applications.

### Scalability and Modularity
This architecture is designed to easily add new micro-applications in the future. New micro-frontends can be added by:
1. Creating a new standalone application.
2. Integrating it into the host application using Module Federation.
3. Reusing shared UI components from the main application.

## How to Set Up & Run the Application
### Prerequisites:
- Node.js (>= 16.x)
- npm or yarn

### Steps:
1. Clone the repository:
   ```bash
   git clone <repository-url>
