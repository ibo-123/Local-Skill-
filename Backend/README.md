# Freelance Marketplace Backend

## Setup

1. Install dependencies: `npm install`
2. Set up MongoDB and update `.env` with your MONGO_URI
3. Start the server: `npm start` or `npm run dev`

## API Endpoints

- POST /api/auth/register
- POST /api/auth/login
- POST /api/jobs (protected)
- GET /api/jobs
- GET /api/jobs/:id
- POST /api/proposals (protected)
- GET /api/proposals/job/:jobId
- POST /api/services (protected)
- GET /api/services
- POST /api/messages (protected)
- GET /api/messages/:userId (protected)
