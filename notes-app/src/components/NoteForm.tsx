import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchNoteById, createNote, updateNote } from "../api/notes";

const NoteForm = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (id) {
      fetchNoteById(id).then((response) => {
        setTitle(response.data.title);
        setContent(response.data.content);
      });
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      await updateNote(id, { title, content });
    } else {
      await createNote({ title, content });
    }
    navigate("/");
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        {id ? "Edit Note" : "Create Note"}
      </h1>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full p-2 mb-3 border border-gray-300 rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-primary"
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className="w-full p-2 h-40 border border-gray-300 rounded-md resize-none 
                  focus:outline-none focus:ring-2 focus:ring-primary"
      />

      <button
        type="submit"
        className="w-full mt-4 bg-primary text-white py-2 rounded-md 
                  hover:bg-opacity-90 transition"
      >
        {id ? "Update" : "Create"}
      </button>

      <button 
        onClick={() => navigate("/")} 
        className="w-full mt-2 bg-gray-300 text-gray-800 py-2 rounded-md 
                  hover:bg-gray-400 transition"
      >
        Cancel
      </button>
    </form>
  );
};

export default NoteForm;
