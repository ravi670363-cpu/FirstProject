# CallAnytime - Modern Dating Website

A full-stack dating website focused on women users to attract male connections.

## Tech Stack

- **Frontend**: React.js with Vite
- **Backend**: Node.js with Express
- **Database**: PostgreSQL
- **Authentication**: JWT with bcrypt

## Features

- Modern responsive UI
- User authentication (Sign Up/Login)
- User profiles with pictures, bio, interests, and hobbies
- Search functionality with filters (age, location, interests)
- Featured profiles section
- Profile editing capabilities

## Project Structure

```
├── backend/
│   ├── config/
│   │   ├── database.js          # PostgreSQL connection
│   │   └── database.sql         # Database schema
│   ├── controllers/
│   │   ├── authController.js    # Authentication logic
│   │   └── profileController.js # Profile management
│   ├── middleware/
│   │   ├── auth.js              # JWT authentication
│   │   └── upload.js            # File upload handling
│   ├── routes/
│   │   ├── authRoutes.js        # Auth endpoints
│   │   └── profileRoutes.js     # Profile endpoints
│   ├── uploads/                 # Profile pictures storage
│   ├── .env.example             # Environment variables template
│   ├── server.js                # Express server
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx       # Navigation bar
    │   │   ├── Navbar.css
    │   │   ├── Footer.jsx       # Footer component
    │   │   └── Footer.css
    │   ├── context/
    │   │   └── AuthContext.jsx  # Authentication context
    │   ├── pages/
    │   │   ├── Home.jsx         # Landing page
    │   │   ├── Home.css
    │   │   ├── Login.jsx        # Login page
    │   │   ├── SignUp.jsx       # Registration page
    │   │   ├── Auth.css         # Auth pages styles
    │   │   ├── Profile.jsx      # User profile view
    │   │   ├── Profile.css
    │   │   ├── EditProfile.jsx  # Profile editing
    │   │   ├── Search.jsx       # Search profiles
    │   │   └── Search.css
    │   ├── App.jsx              # Main app component
    │   ├── main.jsx             # Entry point
    │   └── index.css            # Global styles
    ├── index.html
    ├── vite.config.js
    └── package.json
```

## Setup Instructions

### 1. Database Setup

Install PostgreSQL and create the database:

```bash
# Login to PostgreSQL
psql -U postgres

# Run the SQL schema
\i backend/config/database.sql
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your database credentials
# DB_HOST=localhost
# DB_PORT=5432
# DB_NAME=dating_db
# DB_USER=postgres
# DB_PASSWORD=your_password
# JWT_SECRET=your_secret_key
# PORT=5000

# Create uploads directory
mkdir uploads

# Start the server
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Profile
- `GET /api/profile/me` - Get own profile
- `GET /api/profile/:id` - Get user profile by ID
- `PUT /api/profile/update` - Update profile
- `POST /api/profile/upload` - Upload profile picture
- `GET /api/profile/search/users` - Search users with filters
- `GET /api/profile/featured/profiles` - Get featured profiles

## Database Schema

### Users Table
- id, name, email, password, gender, age, city, created_at

### Profiles Table
- id, user_id, bio, interests, hobbies, profile_picture, location, updated_at

### Matches Table (Optional)
- id, user_id, matched_user_id, status, created_at

## Features in Detail

### Home Page
- Hero section with search bar
- Featured profiles grid
- Responsive design

### Authentication
- JWT-based authentication
- Password hashing with bcrypt
- Form validation

### User Profiles
- Profile picture upload
- Bio, interests, and hobbies
- Location and age display
- Edit profile functionality

### Search System
- Search by name, age, city
- Filter by age range and location
- Card-based results display

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected routes
- File upload validation
- SQL injection prevention with parameterized queries

## Future Enhancements

- Real-time messaging
- Match system with likes
- Email verification
- Password reset functionality
- Advanced search filters
- User blocking/reporting
- Photo gallery

## License

MIT
