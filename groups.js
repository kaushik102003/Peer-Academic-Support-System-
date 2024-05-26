// routes/groups.js

const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// Route for creating a new study group
router.post('/study-groups', (req, res) => {
    const { groupName, description, members } = req.body;

    // Insert the study group data into the database
    const sql = 'INSERT INTO study_groups (group_name, description, members) VALUES (?, ?, ?)';
    db.query(sql, [groupName, description, members], (err, result) => {
        if (err) {
            console.error('Error creating study group:', err);
            res.status(500).json({ error: 'An internal server error occurred' });
            return;
        }
        res.status(201).json({ message: 'Study group created successfully', studyGroupId: result.insertId });
    });
});

// Route for creating a new discussion group
router.post('/discussion-groups', (req, res) => {
    const { groupName, topic, members } = req.body;

    // Insert the discussion group data into the database
    const sql = 'INSERT INTO discussion_groups (group_name, topic, members) VALUES (?, ?, ?)';
    db.query(sql, [groupName, topic, members], (err, result) => {
        if (err) {
            console.error('Error creating discussion group:', err);
            res.status(500).json({ error: 'An internal server error occurred' });
            return;
        }
        res.status(201).json({ message: 'Discussion group created successfully', discussionGroupId: result.insertId });
    });
});

module.exports = router;
