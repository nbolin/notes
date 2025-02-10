import apiClient from "./apiClient";

export const fetchNotes = () => apiClient.get("/notes");

export const fetchNoteById = (id: string) => apiClient.get(`/notes/${id}`);

export const createNote = (note: { title: string; content: string }) =>
  apiClient.post("/notes", note);

export const updateNote = (id: string, updatedNote: { title: string; content: string }) =>
  apiClient.put(`/notes/${id}`, updatedNote);

export const deleteNote = (id: string) => apiClient.delete(`/notes/${id}`);
