# Local Skill Marketplace for Freelancers

A full-stack web application designed to connect clients with local freelancers. This platform allows clients to post job opportunities and freelancers to offer their services, submit proposals, and communicate securely.

## 🚀 Purpose
The main purpose of this project is to create an accessible, localized marketplace where individuals and small businesses (Clients) can easily find skilled professionals (Freelancers) for short-term or long-term projects. It streamlines the process of job posting, bidding, messaging, and project tracking.

## 🛠️ Tech Stack
- **Frontend:** React, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JSON Web Tokens (JWT)

## 🧩 Project Architecture & Components

The project is divided into two main directories: `Backend/` and `frontend/`.

### 1. Backend (Node.js/Express)
The backend provides a RESTful API to manage the marketplace's data and business logic. 

**Core Models (MongoDB Collections):**
- `User.js` - Base user authentication and profile management.
- `Client.js` - Specific profile details for client users.
- `Freelancer.js` - Specific profile details for freelancer users.
- `Job.js` - Job postings created by clients.
- `Service.js` - Pre-defined services offered by freelancers.
- `Proposal.js` - Bids submitted by freelancers for specific jobs.
- `Message.js` - Direct messages between users for negotiation and collaboration.
- `Review.js` - Feedback and ratings left by users after project completion.
- `Payment.js` - Records of transactions.
- `Skill.js` - Taxonomy of skills available on the platform.

### 2. Frontend (React)
The frontend is a single-page application (SPA) providing an intuitive interface for both user types.

**Pages (`src/pages/`):**
- `Home.js` - The landing page and overview of the platform.
- `Register.js` / `Login.js` - User authentication flows.
- `Dashboard.js` - A personalized view for managing jobs, services, and proposals based on the user's role.
- `PostJob.js` - Form for clients to create new job listings.
- `JobDetails.js` - Detailed view of a specific job and its associated proposals.
- `Messaging.js` - Interface for real-time or asynchronous communication between clients and freelancers.

**Reusable Components (`src/components/`):**
- `Navbar.js` - Navigation and user context menu.
- `JobCard.js` - Summary view of a job posting.
- `ServiceCard.js` - Summary view of a freelancer's service.
- `ProposalCard.js` - Display of a freelancer's bid on a job.
- `ReviewCard.js` - Display of user feedback.
- `MessageBox.js` - Chat message bubble component.

## ⚙️ Setup & Installation

### Prerequisites
- Node.js installed
- MongoDB running locally or a MongoDB Atlas connection string

### Backend Setup
1. Open a terminal and navigate to the backend directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the `Backend` directory and define your variables (e.g., `PORT`, `MONGO_URI`, `JWT_SECRET`).
4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
The application will typically be accessible at `http://localhost:3000`.

## 📂 Folder Structure

```text
Data Base Assignment/
├── Backend/
│   ├── controllers/      # API route handlers
│   ├── middleware/       # Authentication & validation
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API route definitions
│   ├── server.js         # Express app entry point
│   └── package.json
└── frontend/
    ├── public/           # Static assets
    ├── src/
    │   ├── components/   # Reusable UI elements
    │   ├── pages/        # Main application views
    │   └── App.js        # React router and layout
    ├── tailwind.config.js
    └── package.json
```
# Local-Skill-Freelance
