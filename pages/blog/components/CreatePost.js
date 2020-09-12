import React, { useState } from "react";
export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [notification, setNotification] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    fire.firestore().collection("blog").doc(title).set({
      title: title,
      content: content,
    });
    setTitle("");
    setContent("");
    setNotification("Blogpost created");
    setTimeout(() => {
      setNotification("");
    }, 2000);
  };
  return (
    <div className="bg-gray-500 container">
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title
          <br />
          <input
            type="text"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          Content
          <br />
          <textarea
            value={content}
            onChange={({ target }) => setContent(target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
