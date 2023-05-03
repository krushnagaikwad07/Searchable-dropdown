import React, {useState} from "react";
import "./App.css";
import SearchableDropdown from './SearchableDropdown';

export default function App() {
  const options = ['Cricket', 'Bat', 'Ball', 'Football', 'Khokho', 'Kabaddi', 'Swimming','Dancing'];

  
  return (
    <div className="App">
        <SearchableDropdown options={options} />

  </div>
  );
}