const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static('.'));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`🎉 Birthday website is running at http://localhost:${PORT}`);
    console.log(`💕 Open this link in your browser to see the beautiful gift!`);
    console.log(`📱 The website is mobile-optimized with touch gestures!`);
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send(`
        <html>
            <head>
                <title>Page Not Found</title>
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        text-align: center; 
                        padding: 50px; 
                        background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
                        color: #333;
                    }
                    h1 { color: #d4418e; }
                </style>
            </head>
            <body>
                <h1>💕 Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
                <a href="/" style="color: #ff4d7e; text-decoration: none; font-weight: bold;">← Back to Birthday Gift</a>
            </body>
        </html>
    `);
});
