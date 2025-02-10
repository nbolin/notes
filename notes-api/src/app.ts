import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import noteRoutes from './routes/note.routes';

dotenv.config();

const app = express();

// Parse allowed origins, ensuring they are properly formatted
const allowedOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(",").map(origin => origin.trim())
  : [];

// Check if the origin is allowed
app.use(
  cors({
    origin: (origin, callback) => {
      // If no origin (e.g., for same-origin requests), allow it
      if (!origin) {
        callback(null, true);
      } 
      // Check if the origin is in the allowed list
      else if (allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        callback(null, true);
      } 
      // Reject the origin if not allowed
      else {
        console.warn(`Blocked CORS request from origin: ${origin}`);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allows cookies if needed
  })
);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Notes API!');
});

app.use('/notes', noteRoutes);

export default app;


