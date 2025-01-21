import { FiSearch } from "react-icons/fi";
import useNotesStore from "../store/useNotesStore.ts";

const Sidebar = () => {
  const { notes, search, selectNote, setSearch } = useNotesStore();

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="w-1/3 p-4 bg-white shadow-lg">
      <div className="flex items-center mb-4">
        <FiSearch className="mr-2 text-xl" />

        <input
          type="text"
          placeholder="Search Notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border-b focus:outline-none"
        />
      </div>

      {/* Note List */}
      <div>
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note, index) => (
            <div
              key={index}
              onClick={() => selectNote(index)}
              className="flex items-center p-4 mb-2 border rounded-lg shadow-md cursor-pointer hover:bg-gray-300"
            >
              {/* Color circle */}
              <div
                className="w-4 h-4 mr-2 rounded-full"
                style={{
                  backgroundColor: note.color,
                  border: "1px solid #000",
                }}
              />

              <div
                className="truncate"
                dangerouslySetInnerHTML={{ __html: note.text }}
              ></div>
            </div>
          ))
        ) : (
          <p>No new notes</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
