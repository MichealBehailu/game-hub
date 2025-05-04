import useGeners from "@/hooks/useGeners";
import React from "react";

const GenreList = () => {
  const {data} = useGeners()
  return (
    <ul>
      {data.map((d) => (
        <li key={d.id}>{d.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
