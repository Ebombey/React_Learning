import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./App.css";
import useNotesStore from "./store/useNotesStore.ts";
import { AiOutlinePlus } from "react-icons/ai";
import Sidebar from "./components/Sidebar.tsx";

function App() {
  const {
    editorContent,
    noteColor,
    currentNoteIndex,
    setEditorContent,
    setNoteColor,
    setCurrentNoteIndex,
    addOrUpdateNote,
  } = useNotesStore();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Area */}
      <div className="w-2/3 p-8">
        <ReactQuill
          placeholder="Write your note here..."
          theme="snow"
          className="h-96 bg-white mb-[2rem]"
          value={editorContent}
          onChange={setEditorContent}
        />

        {/* Color Selector */}
        <div className="flex ml-[1rem] items-center mt-4 space-x-4">
          <input
            type="color"
            value={noteColor}
            onChange={(e) => setNoteColor(e.target.value)}
            className="w-10 h-10 p-1 border rounded-full"
          />
          <p>Choose a Note Color</p>
        </div>

        {/* Save Button */}
        <button
          onClick={addOrUpdateNote}
          className="bg-blue-500 ml-[1rem] text-white py-2 px-4 mt-4 rounded-lg shadow-lg hover:bg-blue-600 flex items-center"
        >
          <AiOutlinePlus className="mr-2" />
          {currentNoteIndex !== null ? "Update Note" : "Save Note"}
        </button>
      </div>
    </div>
  );
}

export default App;
