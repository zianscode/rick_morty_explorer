"use client";

import React, { useState, useCallback } from "react";
import { Search } from "lucide-react";
import { useCharacters } from "@/hooks/useCharacters";

export const SearchBar: React.FC = () => {
  const { filters, setFilters } = useCharacters();
  const [inputValue, setInputValue] = useState(filters.name || "");

  const debouncedSearch = useCallback(
    (value: string) => {
      setFilters({ name: value });
    },
    [setFilters]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedSearch(value);
  };

  const handleClear = () => {
    setInputValue("");
    setFilters({ name: "" });
  };

  return (
    <div
      style={{
        position: "relative",
        maxWidth: "42rem",
        margin: "0 auto 40px",
      }}
    >
      <div style={{ position: "relative" }}>
        <Search
          style={{
            position: "absolute",
            left: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#9ca3af",
            width: "20px",
            height: "20px",
          }}
        />
        <input
          type="text"
          placeholder="Search characters by name..."
          value={inputValue}
          onChange={handleInputChange}
          style={{
            width: "100%",
            paddingLeft: "48px",
            paddingRight: inputValue ? "40px" : "16px",
            paddingTop: "16px",
            paddingBottom: "16px",
            backgroundColor: "var(--color-input-bg)",
            border: "2px solid var(--color-input-border)",
            borderRadius: "16px",
            color: "var(--color-input-text)",
            fontSize: "1rem",
            outline: "none",
            transition: "all 0.2s ease",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "#97ce4c";
            e.target.style.boxShadow = "0 0 0 3px rgba(151, 206, 76, 0.2)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "var(--color-input-border)";
            e.target.style.boxShadow = "none";
          }}
        />
        {inputValue && (
          <button
            onClick={handleClear}
            style={{
              position: "absolute",
              right: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#9ca3af",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              borderRadius: "4px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#6b7280";
              e.currentTarget.style.backgroundColor =
                "var(--color-card-border)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#9ca3af";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
      <p
        style={{
          marginTop: "8px",
          fontSize: "0.875rem",
          color: "#6b7280",
          textAlign: "center",
        }}
      >
        Try searching for &rdquo;Rick&rdquo;, &rdquo;Morty&rdquo;, &rdquo;Summer&rdquo;, etc.
      </p>
    </div>
  );
};
