"use client";
import { useState } from "react";
import Create from "../assets/Create";
import NoteModal from "./NoteModal";

const AddNoteButton = ({ onSaveNote }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddNote = () => {
    if (title.trim() && content.trim()) {
      onSaveNote({ title, content });
      setTitle("");
      setContent("");
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl transition-transform hover:scale-110"
      >
        <Create />
      </button>
      {isModalOpen && (
        <NoteModal
          setContent={setContent}
          title={title}
          setIsModalOpen={setIsModalOpen}
          handleAddNote={handleAddNote}
          content={content}
          setTitle={setTitle}
        />
      )}
    </>
  );
};

export default AddNoteButton;
