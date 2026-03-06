const pool = require('../config/database');

// Get User Profile
exports.getProfile = async (req, res) => {
  try {
    const userId = req.params.id || req.user.id;

    const result = await pool.query(
      `SELECT u.id, u.name, u.email, u.gender, u.age, u.city, 
              p.bio, p.interests, p.hobbies, p.profile_picture, p.location
       FROM users u
       LEFT JOIN profiles p ON u.id = p.user_id
       WHERE u.id = $1`,
      [userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update Profile
exports.updateProfile = async (req, res) => {
  const { bio, interests, hobbies, location } = req.body;
  const userId = req.user.id;

  try {
    const result = await pool.query(
      `UPDATE profiles 
       SET bio = $1, interests = $2, hobbies = $3, location = $4, updated_at = CURRENT_TIMESTAMP
       WHERE user_id = $5
       RETURNING *`,
      [bio, interests, hobbies, location, userId]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Upload Profile Picture
exports.uploadProfilePicture = async (req, res) => {
  const userId = req.user.id;

  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    const profilePicture = `/uploads/${req.file.filename}`;

    await pool.query(
      'UPDATE profiles SET profile_picture = $1 WHERE user_id = $2',
      [profilePicture, userId]
    );

    res.json({ profile_picture: profilePicture });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Search Users
exports.searchUsers = async (req, res) => {
  const { query, minAge, maxAge, city, interests } = req.query;
  const currentUserId = req.user.id;

  try {
    let sqlQuery = `
      SELECT u.id, u.name, u.gender, u.age, u.city, 
             p.bio, p.interests, p.profile_picture, p.location
      FROM users u
      LEFT JOIN profiles p ON u.id = p.user_id
      WHERE u.id != $1
    `;
    const params = [currentUserId];
    let paramCount = 1;

    if (query) {
      paramCount++;
      sqlQuery += ` AND (u.name ILIKE $${paramCount} OR u.city ILIKE $${paramCount})`;
      params.push(`%${query}%`);
    }

    if (minAge) {
      paramCount++;
      sqlQuery += ` AND u.age >= $${paramCount}`;
      params.push(minAge);
    }

    if (maxAge) {
      paramCount++;
      sqlQuery += ` AND u.age <= $${paramCount}`;
      params.push(maxAge);
    }

    if (city) {
      paramCount++;
      sqlQuery += ` AND u.city ILIKE $${paramCount}`;
      params.push(`%${city}%`);
    }

    if (interests) {
      paramCount++;
      sqlQuery += ` AND p.interests && $${paramCount}`;
      params.push(`{${interests}}`);
    }

    sqlQuery += ' ORDER BY u.created_at DESC LIMIT 50';

    const result = await pool.query(sqlQuery, params);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get Featured Profiles
exports.getFeaturedProfiles = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT u.id, u.name, u.gender, u.age, u.city, 
              p.bio, p.interests, p.profile_picture, p.location
       FROM users u
       LEFT JOIN profiles p ON u.id = p.user_id
       ORDER BY RANDOM()
       LIMIT 6`
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
