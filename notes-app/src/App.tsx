import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NotesListPage from "./pages/NotesListPage";
import NoteDetailPage from "./pages/NoteDetailPage";
import NoteFormPage from "./pages/NoteFormPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<NotesListPage />} />
          <Route path="/note/:id" element={<NoteDetailPage />} />
          <Route path="/create" element={<NoteFormPage />} />
          <Route path="/edit/:id" element={<NoteFormPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

