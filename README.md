# SkillSync
<!-- SkillSync - Personalized Learning & Productivity Dashboard
Roadmap
Phase 1: Planning & Setup
- Define core features: User goals, daily tasks, YouTube/GitHub sync, Pomodoro, skill chart
- Design wireframes: Use Figma or Pen & Paper
- Choose stack: Frontend: Next.js (web) or Flutter (cross-platform)
Backend: Firebase (fast), or Supabase (Postgres + auth)
Phase 2: Authentication & User Onboarding
- Email/Google login: Firebase Auth or Supabase Auth
- Onboarding form: Ask for: name, goals (e.g., DSA, ML), time per day, platforms used
- Store preferences: Firestore / Supabase DB
Phase 3: Dashboard Core
- Daily Goal Tracker: UI to log daily activity (text or buttons like: 'Completed DSA 1hr')
- Streak System: Show streak bar and achievement badges
- Pomodoro Timer: 25-5 work-break timer with stats saved
- Skill Growth Chart: Use Charts.js or Recharts to plot progress weekly
Phase 4: Smart Sync & API Integration
- GitHub Sync: GitHub API (recent commits, activity per repo)
- YouTube Progress: YouTube API (watch history, video bookmarks)
- LeetCode Tracker (Optional): Scrape recent submissions or use Unofficial API
- ChatGPT Assistant: OpenAI API - suggest what to learn next or generate daily plans
Phase 5: Notes, Reflections & Calendar
- Daily Reflection: "What did you learn today?" - Save in DB
- Notepad: Markdown editor for code snippets, ideas
- Calendar View: Show past activity, missed days, and upcoming goals
Phase 6: UI Polish & Extra Features
- Dark Mode: Always looks premium
- Responsive UI: Mobile & desktop support
- Export Progress: Let users download their progress PDF (use jsPDF)
- Share Feature: "Share my growth" with LinkedIn-style card generator
Phase 7: Deployment & Portfolio
- Domain + Hosting: Vercel (for Next.js) / Firebase Hosting (for Flutter Web)
- GitHub Repo: Add Readme with features, demo link, screenshots
- Demo Video: Record a 1-min walkthrough with Loom or OBS
- Portfolio Highlight: Write a blog: "How I built a smart learning dashboard -->