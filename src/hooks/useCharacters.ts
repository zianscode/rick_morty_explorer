import { useEffect } from "react";
import { useCharacterStore } from "@/store/characterStore";
import { useDebounce } from "./useDebounce";

export const useCharacters = () => {
  const {
    characters,
    favorites,
    filters,
    pagination,
    isLoading,
    error,
    fetchCharacters,
    setFilters,
    toggleFavorite,
    clearFilters,
    setPage,
  } = useCharacterStore();

  const debouncedName = useDebounce(filters.name || "", 500);

  useEffect(() => {
    fetchCharacters({ ...filters, name: debouncedName || undefined });
  }, [
    debouncedName,
    filters.status,
    filters.species,
    filters.gender,
    filters,
    fetchCharacters,
  ]);

  return {
    characters,
    favorites,
    filters,
    pagination,
    isLoading,
    error,
    setFilters,
    toggleFavorite,
    clearFilters,
    setPage,
  };
};
