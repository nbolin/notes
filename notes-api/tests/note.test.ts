import request from 'supertest';
import { v4 as uuidv4 } from 'uuid';
import app from '../src/app';
import db from '../src/database';

beforeAll((done) => {
  // Create a fresh notes table before running tests
  db.exec(
    `CREATE TABLE IF NOT EXISTS notes (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      createdAt TEXT DEFAULT CURRENT_TIMESTAMP,
      updatedAt TEXT DEFAULT CURRENT_TIMESTAMP
    );`,
    done
  );
});

afterAll((done) => {
  // Clean up database after tests
  db.exec(`DROP TABLE notes;`, () => {
    db.close();
    done();
  });
});

describe('Notes API', () => {
  let noteId: string;

  it('should create a new note', async () => {
    const response = await request(app)
      .post('/notes')
      .send({
        title: 'Test Note',
        content: 'This is a test note.'
      })
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe('Test Note');
    noteId = response.body.id;
  });

  it('should fetch all notes', async () => {
    const response = await request(app).get('/notes').expect(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should fetch a note by ID', async () => {
    const response = await request(app).get(`/notes/${noteId}`).expect(200);
    expect(response.body).toHaveProperty('id', noteId);
  });

  it('should update a note', async () => {
    const response = await request(app)
      .put(`/notes/${noteId}`)
      .send({
        title: 'Updated Note',
        content: 'This note has been updated.'
      })
      .expect(200);

    expect(response.body).toHaveProperty('id', noteId);
    expect(response.body.title).toBe('Updated Note');
  });

  it('should delete a note', async () => {
    await request(app).delete(`/notes/${noteId}`).expect(200);
    await request(app).get(`/notes/${noteId}`).expect(404);
  });
});
