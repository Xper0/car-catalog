"use client";
import React, { useState } from "react";
import { SearhManufacturer } from "./SearhManufacturer";

export const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");

  const handleSearch = () => {};
  return (
    <form className="search-bar" onSubmit={handleSearch}>
    
      <div className="searchbar_item">
        <SearhManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};
