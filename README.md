# Zero Trust Enterprise (Full Stack)

This project is a full stack app with:

- Frontend: React + Vite
- Backend: Flask + SQLAlchemy
- Database: SQLite (`instance/ztesd.db`)
- Auth: Email/password + webcam verification (image hash matching)

## Features

- User registration with webcam enrollment
- Login with webcam verification
- JWT-based protected APIs
- Role-based access (Employee, Manager, Admin)
- Attendance, dashboard, file APIs

## Prerequisites

- Node.js 18+ (or newer)
- Python 3.10+ (tested here on Python 3.13)

## Setup

From the project root (`pbl full stack enterprise`):

1. Install frontend dependencies:

```bash
npm install
```

2. Install backend dependencies:

```bash
pip install -r requirements.txt
```

3. Verify `.env` exists (already included in this project by default).

## Run the Project (two terminals)

### Terminal 1: Start backend (Flask API)

```bash
python run.py
```

Backend runs at:

- `http://127.0.0.1:5000`

### Terminal 2: Start frontend (Vite)

```bash
npm run dev
```

Frontend runs at:

- `http://localhost:5173`

Vite proxies `/api` to Flask (`127.0.0.1:5000`) during development.

## Default Seed Accounts

The backend seeds users on first run (from `init_db.py`):

- Admin: `admin@zero-trust.dev`
- Manager: `manager@zero-trust.dev`
- Employee: `employee@zero-trust.dev`
- Password: `Password@123`

## Webcam Login Flow

1. Register a new user with a webcam capture.
2. On login, provide email + password.
3. Capture webcam image when prompted.
4. Backend verifies the face hash and issues JWT token.

## Database

SQLite file location:

- `instance/ztesd.db`

Tables include:

- `users`
- `attendance`
- `files`
- `logs`

## Notes

- Use HTTPS in production when using camera/web auth.
- Update `SECRET_KEY` and `JWT_SECRET_KEY` before production deployment.
