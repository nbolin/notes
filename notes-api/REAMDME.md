# Notes API

This is a simple CRUD API for managing notes using Express and SQLite.

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) (or `yarn` if preferred)

## Project Structure
```
📂 notes-app
 ┣ 📂 dist                 # Production build output
 ┣ 📂 src                  # Source code
 ┃ ┣ 📂 controllers        # API route handlers
 ┃ ┣ 📂 interfaces         # TypeScript interfaces
 ┃ ┣ 📂 routes             # Express route definitions
 ┃ ┣ 📜 app.ts             # Express app configuration
 ┃ ┣ 📜 database.ts        # SQLite database connection
 ┃ ┣ 📜 server.ts          # Server entry point
 ┃ ┗ 📜 .env               # Environment variables
 ┣ 📂 tests
 ┃ ┣ 📜 note.test.ts      # Test for the notes API
```

## Installation

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Set up environment variables:**
   - Copy `.env.example` to `.env` in the root of the project.
   - Add the following (modify values as needed):
     ```env
     PORT=5000
     ```

## Running the Server

### **Start the server in development mode:**
```sh
npm run dev
```

This will run the server using `ts-node-dev` with automatic reloading.

### **Build and run in production mode:**
```sh
npm run build
npm start
```

## API Endpoints

### **Create a Note**
```http
POST /notes
```
**Body:**
```json
{
  "title": "Note Title",
  "content": "Note Content"
}
```

### **Get All Notes**
```http
GET /notes
```

### **Get a Single Note**
```http
GET /notes/:id
```

### **Update a Note**
```http
PUT /notes/:id
```
**Body:**
```json
{
  "title": "Updated Title",
  "content": "Updated Content"
}
```

### **Delete a Note**
```http
DELETE /notes/:id
```

## Database

SQLite is used as the database. A local file `database.sqlite` is created automatically in the project root when the server starts.

## Testing with Jest
- Tries creating notes with missing fields.
- Tries updating/deleting a non-existent note.
- Validates that the API handles errors properly.
```sh
npm run test
```

## Notes
- The database is a simple SQLite file-based system. No additional setup is required.
- Modify the `.env` file to change the default port.
- To reset the database, delete `database.sqlite` and restart the server.