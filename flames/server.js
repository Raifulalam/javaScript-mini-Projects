const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// File path to store user data
const dataFilePath = path.join(__dirname, 'data', 'userData.json');

// Ensure the data directory exists
if (!fs.existsSync(path.dirname(dataFilePath))) {
    fs.mkdirSync(path.dirname(dataFilePath));
}

// Function to calculate flames result
function calculateFlames(name1, name2) {
    // Simplified FLAMES calculation
    return 'Friendship'; // Dummy result
}

// Route to handle FLAMES calculation and save data
app.post('/flames', (req, res) => {
    const { name1, name2 } = req.body;
    const result = calculateFlames(name1, name2);

    // Save data to a file
    const userData = { name1, name2, result, timestamp: new Date().toISOString() };

    // Read existing data
    fs.readFile(dataFilePath, (err, data) => {
        let allData = [];
        if (!err) {
            allData = JSON.parse(data);
        }

        allData.push(userData);

        // Write updated data
        fs.writeFile(dataFilePath, JSON.stringify(allData, null, 2), (err) => {
            if (err) {
                console.error('Error writing file', err);
                res.status(500).send('Internal Server Error');
            } else {
                res.json({ result });
            }
        });
    });
});

// Serve static files from 'public' directory
app.use(express.static('public'));

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
