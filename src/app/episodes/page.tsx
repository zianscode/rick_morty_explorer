"use client";

import { useState, useEffect, useCallback } from "react";
import { EpisodeCard } from "@/components/EpisodeCard";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { api } from "@/services/api";
import { Episode } from "@/types/character";
import { Film } from "lucide-react";

export default function EpisodesPage() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchEpisodes = useCallback(async () => {
    setLoading(true);
    try {
      const data = await api.getEpisodes({ page: page.toString() });
      setEpisodes(data.results);
      setTotalPages(data.info.pages);
    } catch (error) {
      console.error("Failed to fetch episodes:", error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchEpisodes();
  }, [fetchEpisodes]);

  return (
    <div style={{ animation: "fadeIn 0.5s ease-in-out" }}>
      <div
        style={{
          textAlign: "center",
          marginBottom: "48px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #b19cd9, #c084fc)",
            marginBottom: "24px",
          }}
        >
          <Film style={{ width: "40px", height: "40px", color: "#ffffff" }} />
        </div>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "var(--color-text)",
            marginBottom: "16px",
          }}
        >
          Rick and Morty <span style={{ color: "#b19cd9" }}>Episodes</span>
        </h1>
        <p
          style={{
            fontSize: "1.125rem",
            color: "var(--color-text)",
            opacity: 0.8,
            maxWidth: "42rem",
            margin: "0 auto",
          }}
        >
          Browse through all episodes from the series
        </p>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {episodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
              marginTop: "48px",
            }}
          >
            <button
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
              disabled={page === 1}
              style={{
                padding: "8px 24px",
                borderRadius: "12px",
                backgroundColor: "var(--color-filter-bg)",
                border:
                  page === 1 ? "none" : "1px solid var(--color-card-border)",
                color: "var(--color-text)",
                fontSize: "0.875rem",
                fontWeight: 500,
                cursor: page === 1 ? "not-allowed" : "pointer",
                opacity: page === 1 ? 0.5 : 1,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (page !== 1) {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-card-border)";
                }
              }}
              onMouseLeave={(e) => {
                if (page !== 1) {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-filter-bg)";
                }
              }}
            >
              Previous
            </button>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setPage(pageNum)}
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
                      ...(page === pageNum
                        ? {
                            backgroundColor: "#b19cd9",
                            color: "#ffffff",
                          }
                        : {
                            backgroundColor: "var(--color-filter-bg)",
                            border: "1px solid var(--color-card-border)",
                            color: "var(--color-text)",
                          }),
                    }}
                    onMouseEnter={(e) => {
                      if (page !== pageNum) {
                        e.currentTarget.style.backgroundColor =
                          "var(--color-card-border)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (page !== pageNum) {
                        e.currentTarget.style.backgroundColor =
                          "var(--color-filter-bg)";
                      }
                    }}
                  >
                    {pageNum}
                  </button>
                );
              })}
              {totalPages > 5 && (
                <span
                  style={{
                    color: "var(--color-text)",
                    opacity: 0.5,
                    padding: "0 8px",
                  }}
                >
                  ...
                </span>
              )}
            </div>

            <button
              onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={page === totalPages}
              style={{
                padding: "8px 24px",
                borderRadius: "12px",
                backgroundColor: "var(--color-filter-bg)",
                border:
                  page === totalPages
                    ? "none"
                    : "1px solid var(--color-card-border)",
                color: "var(--color-text)",
                fontSize: "0.875rem",
                fontWeight: 500,
                cursor: page === totalPages ? "not-allowed" : "pointer",
                opacity: page === totalPages ? 0.5 : 1,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (page !== totalPages) {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-card-border)";
                }
              }}
              onMouseLeave={(e) => {
                if (page !== totalPages) {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-filter-bg)";
                }
              }}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
