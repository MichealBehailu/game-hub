import useGeners from "@/hooks/useGeners";
import React from "react";

const GenreList = () => {
  const { genres } = useGeners();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
