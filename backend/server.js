{
  "name": "devops-bot-backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.17.1",
    "body-parser": "^1.19.0",
    "sqlite3": "^5.0.0",
    "nodemailer": "^6.6.3",
    "crypto": "^1.0.1",
    "multer": "^1.4.2",
    "path": "^0.12.7",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "jsonwebtoken": "^8.5.1",
    "bcryptjs": "^2.4.3"
  }
}


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
