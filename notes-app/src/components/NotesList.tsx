import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchNotes } from "../api/notes";

interface Note {
  id: number;
  title: string;
}

const NotesList = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const response = await fetchNotes();
        if (response && response.data) {
          setNotes(response.data);
        } else {
          setError("Invalid response from server.");
        }
      } catch (err) {
        setError("Failed to load notes. Please try again.");
        console.error(err);
      } finally {
        setLoading(false); // Ensure loading state is updated
      }
    };

    loadNotes();
  }, []);

  if (loading) return <p>Loading notes...</p>;

  return (
    <div>
    <h1 className="text-2xl font-bold text-gray-900">Notes</h1>
  
    <p className="text-gray-700 mt-2">Click on a note to view details.</p>
    <p className="text-gray-700 mb-4 pb-4 border-b-2">
      Use the <span className="font-semibold text-primary">"Create Note"</span> button to add a new note.
    </p>
  
    {error && <p className="text-red-500">{error}</p>}
  
    {notes.length > 0 ? (
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {notes.map((note) => (
          <li key={note.id}>
          <Link 
            to={`/note/${note.id}`} 
            className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition 
                      text-lg font-semibold text-primary text-center h-full w-full leading-tight"
          >
            {note.title}
          </Link>
          </li>
        ))}
      </ul>
    ) : (
      <p>No notes available.</p>
    )}
  </div>
  
  );
};

export default NotesList;
