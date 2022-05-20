import React, { useState, useEffect } from "react";
function CreateUser() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [coverimage, setCoverImage] = useState("");

  function submitForm(e) {
    e.preventDefault();
    fetch("http://localhost:3001/users/create", {
      method: "post",
      headers:{
          'Content-Type':"application/json"
      },
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
        profileImageUrl: "https://i.imgur.com/YgJjofh.jpeg",
        coverImageUrl: "https://i.imgur.com/OSo2beZ.jpeg",
      }),
    });
    console.log("submitted");
  }
  return (
    <form onSubmit={submitForm}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Username:
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        ProfileImageUrl:
        <input
          type="text"
          name="profileImageUrl"
          onChage={(e) => setImageUrl(e.target.value)}
        />
      </label>
      <label>
        CoverImageUrl:
        <input
          type="text"
          name="coverImageUrl"
          onChange={(e) => setCoverImage(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
export default CreateUser;
