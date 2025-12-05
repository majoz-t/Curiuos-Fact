README: Useless Facts Application

This is the front-end repository for the Useless Facts application, an SPA (Single Page Application) that fetches and displays random facts using an external API. Users can view individual facts and save their favorites locally on the same page.

🚀 Live Demo
Link to Live Application (Coming Soon/Replace with your own deployment link)

🛠️ Tech Stack & Tools
Design/Planning: Figma, Trello
Development Environment: Visual Studio Code
Version Control: Git, GitHub, Gitflow
UI Architecture: Atomic Design
API Interaction: Fetch API
Testing: Vitest 

⚙️ Features & Requirements
The application focuses on consuming the API uselessfacts.jsph.pl and managing state within a single page context.
Functional Requirements:
Fact Display: The app calls and displays one fact at a time.
Dynamic Update: Displayed facts are replaced when a new one is called.
Favorites Management: Users can add a currently displayed fact to a persistent list of favorites.
SPA Structure: The entire application runs within a single index.html file.
Bonus Features (Optional):

Non-Functional Requirements & Quality Attributes:
Design: Simple UI, free choice of theme, with a focus on functionality first.
UI Methodology: Implementation of Atomic Design principles.
Documentation: User flow diagram (userflow.png or similar) included in the repository.
Code Quality: Coherent folder structure, good naming conventions for classes, IDs, and functions.
Version Control Standards:
Development occurs on a dev branch, merging into main when stable.
Strict adherence to Gitflow Workflow.
Commits follow Conventional Commits specifications.
Testing: Inclusion of unit tests using a chosen testing library (Vitest)

📐 Project Methodology
This is an individual project following Agile methodologies. The work was organized using a Kanban board (Trello/Jira), defining user stories and tasks that were completed within a single sprint cycle.
📂 Project Structure (Example)
/useless-facts-app
├── src/
│   ├── assets/ (images, icons)
│   ├── components/ (Atomic Design: atoms, molecules, organisms)
│   ├── styles/ (CSS/Sass files)
│   ├── utils/ (helper functions)
│   ├── main.js (entry point, event handlers)
│   └── apiService.js (Fetch API calls)
├── index.html (The single page)
├── styles.css
├── userflow.png (Design artifact)
├── package.json
├── README.md (This file)
└── vite.config.js (or similar config file if using a bundler)

🏃 Getting Started Locally
Clone the repository:
bash
git clone github.com
cd your-repo-name
Usa el código con precaución.

Install dependencies (if applicable):
If using a modern JS setup with package.json (like Vite or Webpack):
bash
npm install
Usa el código con precaución.

Run the application:
bash
npm run dev

