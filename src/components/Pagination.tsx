"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCharacters } from "@/hooks/useCharacters";

export const Pagination: React.FC = () => {
  const { pagination, setPage } = useCharacters();
  const { currentPage, totalPages } = pagination;

  if (totalPages <= 1) return null;

  const pageNumbers = [];
  const maxVisible = 5;

  let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  const end = Math.min(totalPages, start + maxVisible - 1);

  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1);
  }

  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  const buttonStyles = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 16px",
    borderRadius: "12px",
    backgroundColor: "var(--color-filter-bg)",
    border: "1px solid var(--color-card-border)",
    color: "var(--color-text)",
    fontSize: "0.875rem",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.2s ease",
  };

  const disabledButtonStyles = {
    ...buttonStyles,
    opacity: "0.5",
    cursor: "not-allowed",
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        marginTop: "48px",
      }}
    >
      <button
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
        style={currentPage === 1 ? disabledButtonStyles : buttonStyles}
        onMouseEnter={(e) => {
          if (currentPage !== 1) {
            e.currentTarget.style.backgroundColor = "var(--color-card-border)";
          }
        }}
        onMouseLeave={(e) => {
          if (currentPage !== 1) {
            e.currentTarget.style.backgroundColor = "var(--color-filter-bg)";
          }
        }}
      >
        <ChevronLeft style={{ width: "16px", height: "16px" }} />
        Previous
      </button>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {start > 1 && (
          <>
            <button
              onClick={() => setPage(1)}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "var(--color-filter-bg)",
                border: "1px solid var(--color-card-border)",
                color: "var(--color-text)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "var(--color-card-border)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "var(--color-filter-bg)";
              }}
            >
              1
            </button>
            {start > 2 && (
              <span style={{ color: "#6b7280", padding: "0 4px" }}>...</span>
            )}
          </>
        )}

        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => setPage(page)}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
              transition: "all 0.2s ease",
              border: "none",
              cursor: "pointer",
              ...(currentPage === page
                ? {
                    backgroundColor: "#97ce4c",
                    color: "#ffffff",
                  }
                : {
                    backgroundColor: "var(--color-filter-bg)",
                    border: "1px solid var(--color-card-border)",
                    color: "var(--color-text)",
                  }),
            }}
            onMouseEnter={(e) => {
              if (currentPage !== page) {
                e.currentTarget.style.backgroundColor =
                  "var(--color-card-border)";
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== page) {
                e.currentTarget.style.backgroundColor =
                  "var(--color-filter-bg)";
              }
            }}
          >
            {page}
          </button>
        ))}

        {end < totalPages && (
          <>
            {end < totalPages - 1 && (
              <span style={{ color: "#6b7280", padding: "0 4px" }}>...</span>
            )}
            <button
              onClick={() => setPage(totalPages)}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "var(--color-filter-bg)",
                border: "1px solid var(--color-card-border)",
                color: "var(--color-text)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "var(--color-card-border)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "var(--color-filter-bg)";
              }}
            >
              {totalPages}
            </button>
          </>
        )}
      </div>

      <button
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={currentPage === totalPages ? disabledButtonStyles : buttonStyles}
        onMouseEnter={(e) => {
          if (currentPage !== totalPages) {
            e.currentTarget.style.backgroundColor = "var(--color-card-border)";
          }
        }}
        onMouseLeave={(e) => {
          if (currentPage !== totalPages) {
            e.currentTarget.style.backgroundColor = "var(--color-filter-bg)";
          }
        }}
      >
        Next
        <ChevronRight style={{ width: "16px", height: "16px" }} />
      </button>
    </div>
  );
};
