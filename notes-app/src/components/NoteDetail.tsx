import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchNoteById, deleteNote } from "../api/notes";

interface Note {
  id: number;
  title: string;
  content: string;
}

const NoteDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [note, setNote] = useState<Note | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchNoteById(id).then((response) => {
        setNote(response.data);
      });
    }
  }, [id]);

  const handleDelete = async () => {
    if (!id) return; // Ensure id is defined
    await deleteNote(id);
    navigate("/");
  };

  if (!note) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="mb-4">{note.title}</h1>
      <p className="mb-6">{note.content}</p>
      <button onClick={() => navigate(-1)} 
        className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 mt-4 mr-4"
      >Back</button>
      <button className="mr-4" onClick={() => navigate(`/edit/${id}`)}>Edit</button>
      <button
        className="bg-error text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition"
        onClick={() => {
          if (window.confirm("Are you sure you want to delete this note?")) {
            handleDelete();
          }
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default NoteDetail;
