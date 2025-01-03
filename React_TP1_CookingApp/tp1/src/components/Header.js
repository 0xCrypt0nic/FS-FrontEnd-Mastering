import React, { useState } from "react";

const Header = ({ passSearch }) => {
  return (
    <div className="header">
      <h1>Cooking App</h1>
      <input
        type="text"
        placeholder="Tapez le nom d'un aliment (en anglais)"
        id="search"
        onChange={(e) => passSearch(e.target.value)}
      />
    </div>
  );
};

export default Header;
