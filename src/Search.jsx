import React from 'react'
import { useState } from 'react';

function Search() {

  const [query, setQuery] = useState("");

  const users = [
    "john_doe",
    "priya_travels",
    "foodie_life",
    "life_style",
    "travel_world"
  ];

  const filteredUsers = users.filter(user =>
    user.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div
    style={{
        height :"100vh",
        display : "flex",
        justifyContent:"center",
        alighItems : " centtre"
    }}
    
    >
    <div style={{  textAlign:"centre" ,padding: "20px" }}>
      <h2>Search</h2>

      <input
        type="text"
        placeholder="Search users...."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", width: "300px" }}
      />

      <div style={{ marginTop: "20px" }}>
        {filteredUsers.map((user, index) => (
          <p key={index}>{user}</p>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Search
