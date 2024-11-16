// import React, { useState, useEffect } from 'react';

// const NoteEditor = ({ note, onClose, onSave }) => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');

//   // Populate fields if editing an existing note
//   useEffect(() => {
//     if (note) {
//       setTitle(note.title || '');
//       setContent(note.content || '');
//     }
//   }, [note]);

//   const handleSave = () => {
//     if (!title || !content) {
//       alert('Title and content are required!');
//       return;
//     }

//     const updatedNote = note
//       ? { ...note, title, content }
//       : { id: Date.now().toString(), title, content }; // Generate ID for new note

//     onSave(updatedNote); // Pass note back to parent
//   };

//   return (
//     <div className=" bg-black w-full h-dvh flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded shadow-md w-80">
//         <h2 className="text-lg font-bold mb-4">{note ? 'Edit Note' : 'New Note'}</h2>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full p-2 mb-4 border rounded"
//         />
//         <textarea
//           placeholder="Content"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           className="w-full p-2 border rounded h-32"
//         />
//         <div className="flex justify-end space-x-2 mt-4">
//           <button
//             onClick={onClose}
//             className="bg-gray-300 text-gray-800 p-2 rounded"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSave}
//             className="bg-blue-500 text-white p-2 rounded"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NoteEditor;
