# Quick Setup Guide - Run in Chrome

## Step 1: Install PostgreSQL (if not installed)

Download and install PostgreSQL from: https://www.postgresql.org/download/windows/

During installation, remember your password for the 'postgres' user.

## Step 2: Create Database

Open Command Prompt or PowerShell and run:

```bash
# Login to PostgreSQL
psql -U postgres

# You'll be prompted for password
# Then run these commands:

CREATE DATABASE dating_db;
\c dating_db

# Copy and paste the SQL from backend/config/database.sql
# Or run: \i C:/path/to/backend/config/database.sql
```

## Step 3: Setup Backend

```bash
cd backend
npm install
```

Create `.env` file in backend folder:
```
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=dating_db
DB_USER=postgres
DB_PASSWORD=your_postgres_password
JWT_SECRET=mysecretkey123456
```

Start backend:
```bash
npm run dev
```

## Step 4: Setup Frontend

Open a NEW terminal:

```bash
cd frontend
npm install
npm run dev
```

## Step 5: Open in Chrome

The frontend will show you a URL like:
```
http://localhost:3000
```

Open this URL in Chrome!

## Troubleshooting

If PostgreSQL is not installed, you can use a simpler approach with SQLite or skip database setup for now and I can create a mock version.
