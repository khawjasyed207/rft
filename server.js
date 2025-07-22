const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS, PDF)
app.use(express.static(path.join(__dirname, 'public')));

// PDF download route
app.get('/download-brochure', (req, res) => {
    const filename = 'Kifth Brochure Corrected File[1].pdf';
    const filePath = path.join(__dirname, 'public', filename);
    
    if (fs.existsSync(filePath)) {
        res.download(filePath, 'KIFTH_Brochure.pdf', (err) => {
            if (err) console.error("Download failed:", err);
        });
    } else {
        console.error("PDF not found at:", filePath);
        res.status(404).send("PDF not found on server");
    }
});

///app.listen(port, () => {
    ///console.log(`Server running: http://localhost:${port}`);///
    app.listen(port, '0.0.0.0', () => {
    console.log(`Server running: http://localhost:${port} (Accessible on LAN)`);
});
