const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Connect to MySQL database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Define route for handling POST requests to /api/createStudyGroup
app.post('/api/createStudyGroup', async (req, res) => {
    const { groupName, description } = req.body;
    
    if (!groupName || !description) {
        return res.status(400).json({ error: 'Group name and description are required' });
    }

    const query = 'INSERT INTO study_groups (groupName, description) VALUES (?, ?)';
    db.query(query, [groupName, description], (err, result) => {
        if (err) {
            console.error('Error inserting data into database:', err);
            return res.status(500).json({ error: 'Failed to create study group' });
        }
        console.log('Study group created successfully');
        res.status(200).json({ success: true });
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
