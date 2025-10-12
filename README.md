# Serene Pathways Mental Health

<!-- Build: Updated 2025-10-12 -->
[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Digital-Forrest/Barrat-Behavioral-Heath-website)

Serene Pathways is a professional, visually stunning, and user-friendly website for a mental health practice. Built on a modern serverless stack with Cloudflare Workers and React, the application provides a calm, welcoming, and informative experience for potential clients. The design prioritizes clarity, empathy, and ease of access to crucial information, such as services offered, the practitioner's approach, and how to book an appointment. The architecture is a Single Page Application (SPA) utilizing React Router for seamless navigation between different content sections, giving the feel of a traditional multi-page website while maintaining the performance benefits of a modern web app.

## ✨ Key Features

-   **🧘 Empathetic & Professional UI:** A calm, welcoming, and informative experience designed to build trust with potential clients.
-   **📋 Clear Service Information:** Detailed descriptions of services like Psychiatric Evaluations, Medication Management, and Psychotherapy.
-   **👩‍⚕️ Practitioner Spotlight:** Highlights the practitioner's mission, credentials, and unique approach to mental healthcare.
-   **📅 Seamless Navigation:** A Single Page Application (SPA) experience using React Router for smooth, fast transitions without page reloads.
-   **🚀 High-Performance:** Built on a modern serverless stack with Cloudflare Workers for exceptional speed, reliability, and global availability.
-   **📱 Fully Responsive:** A flawless design and user experience across all devices, from mobile phones to desktops.

## 🛠️ Technology Stack

-   **Framework:** [React](https://react.dev/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Routing:** [React Router](https://reactrouter.com/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Deployment:** [Cloudflare Workers](https://workers.cloudflare.com/)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your system:
-   [Node.js](https://nodejs.org/en/) (v18 or later recommended)
-   [Bun](https://bun.sh/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/serene_pathways.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd serene_pathways
    ```

3.  **Install dependencies:**
    ```sh
    bun install
    ```

## 💻 Development

To start the local development server, run the following command:

```sh
bun run dev
```

This will start the Vite development server, and you can view the application by navigating to `http://localhost:3000` (or the port specified in your terminal). The server supports Hot Module Replacement (HMR) for a fast and efficient development workflow.

## 🚢 Deployment

This project is configured for seamless deployment to the Cloudflare global network.

1.  **Build the application:**
    Before deploying, create a production-ready build of the application.
    ```sh
    bun run build
    ```

2.  **Deploy to Cloudflare:**
    Run the deploy script, which uses Wrangler to publish the application.
    ```sh
    bun run deploy
    ```

Alternatively, you can deploy this project with a single click.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Digital-Forrest/Barrat-Behavioral-Heath-website)

## 📂 Project Structure

-   `src/`: Contains all the frontend React application source code.
    -   `components/`: Reusable UI components, including shadcn/ui components.
    -   `pages/`: Top-level route components for each page of the site.
    -   `lib/`: Utility functions and helper scripts.
    -   `hooks/`: Custom React hooks.
    -   `main.tsx`: The main entry point for the React application, where routing is configured.
-   `worker/`: Contains the Cloudflare Worker server-side code.
-   `public/`: Static assets that are served directly.
-   `tailwind.config.js`: Configuration file for Tailwind CSS, including custom themes, colors, and fonts.