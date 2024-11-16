import React from "react";

const NoteModal = ({
  setTitle,
  title,
  setContent,
  content,
  setIsModalOpen,
  handleAddNote,
}) => {
  return (
    <div className=" bg-black w-full h-dvh">
      <div className="bg-[#212121] text-white p-6 z-50 rounded-lg shadow-lg w-full h-dvh">
        <h2 className="text-xl font-bold mb-4">Add Note</h2>
        <input
          className="w-full bg-gray-700 text-white p-2 mb-4 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note Title"
        />
        <textarea
          className="w-full bg-gray-700 text-white p-2 mb-4 rounded h-32"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Note Content"
        />
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 bg-gray-500 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleAddNote}
            className="px-4 py-2 bg-blue-500 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
