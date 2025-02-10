import app from './app';
import dotenv from 'dotenv';
import db from './database'; // Import database to ensure initialization

dotenv.config();

const PORT = process.env.PORT || 3000;

// Ensure database is ready before starting the server
db.serialize(() => {
  app.listen(PORT, () => {
    console.log(`Server running on PORT:${PORT}`);
  });
});
