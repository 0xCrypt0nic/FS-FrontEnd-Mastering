import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1>Cooking App</h1>
      <input
        type="text"
        placeholder="Tapez le nom d'un aliment (en anglais)"
        id="search"
      />
    </div>
  );
};

export default Header;
