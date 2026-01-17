# SwipeHire - Startup Hiring Swipe App

A mobile-first web app that helps early-stage startup founders screen job applicants quickly using a swipe-based interface.

## Features

- **Quick Job Setup**: Define role requirements with structured filters (tech stack, experience level, preferences)
- **AI-Powered Candidate Cards**: Each candidate is summarized into high-signal cards with key strengths highlighted
- **Swipe Interface**: Make quick yes/no decisions with intuitive swipe gestures
- **Candidate Dashboard**: Manage interested, starred, and passed candidates
- **Keyboard Navigation**: Arrow keys for swiping, Z for undo

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (swipe animations)
- Zustand (state management)
- Lucide React (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to use the app.

## Usage

1. **Create a Job**: Click "Create New Job" and define your role requirements
2. **Review Candidates**: Swipe through AI-summarized candidate cards
   - Swipe right / → : Interested
   - Swipe left / ← : Pass
   - Tap star / ↑ : Save for later
   - Z : Undo last action
3. **Manage Results**: View and manage candidates in the dashboard

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Home page
│   ├── job/new/           # Job creation page
│   └── job/[id]/          # Job-specific pages
│       ├── swipe/         # Swipe interface
│       └── dashboard/     # Candidate management
├── components/            # React components
├── data/                  # Mock candidate data
├── store/                 # Zustand state management
└── types/                 # TypeScript types
```
