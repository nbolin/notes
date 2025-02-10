import { Request, Response } from 'express';
import { Note } from '../interfaces/note.interface';
import { v4 as uuidv4 } from 'uuid';
import db from '../database';

// Create a new note
export const createNote = (req: Request, res: Response): void => {
  const { title, content } = req.body;
  if (!title || !content) {
    res.status(400).json({ error: "Title and content are required" });
    return;
  }

  const id = uuidv4();
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;
  const query = `INSERT INTO notes (id, title, content, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)`;

  db.run(query, [id, title, content, createdAt, updatedAt], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    const newNote: Note = { id, title, content, createdAt, updatedAt };
    res.status(201).json(newNote);
  });
};

// Get all notes
export const getNotes = (req: Request, res: Response): void => {
  const query = `SELECT * FROM notes`;

  db.all(query, [], (err, rows: Note[]) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
};

// Get a single note by ID
export const getNoteById = (req: Request, res: Response): void => {
  const { id } = req.params;
  const query = `SELECT * FROM notes WHERE id = ?`;

  db.get(query, [id], (err, row: Note) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.json(row);
  });
};

// Update a note
export const updateNote = (req: Request, res: Response): void => {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!title || !content) {
    res.status(400).json({ error: "Title and content are required" });
    return;
  }

  const updatedAt = new Date().toISOString();
  const query = `UPDATE notes SET title = ?, content = ?, updatedAt = ? WHERE id = ?`;

  db.run(query, [title, content, updatedAt, id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (this.changes === 0) {
      res.status(404).json({ error: "Note not found" });
      return;
    }
    const updatedNote: Note = { id, title, content, updatedAt, createdAt: updatedAt }; // `createdAt` isn't modified here
    res.json(updatedNote);
  });
};

// Delete a note
export const deleteNote = (req: Request, res: Response): void => {
  const { id } = req.params;
  const query = `DELETE FROM notes WHERE id = ?`;

  db.run(query, [id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.json({ message: 'Note deleted successfully', id });
  });
};
