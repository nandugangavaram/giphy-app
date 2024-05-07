"use client";

import { GifContext } from "@/app/layout";
import { Grid } from "@giphy/react-components";
import { useContext, useEffect, useState } from "react";

const GifsLayout = () => {
  const { fetchGifs } = useContext(GifContext);
  const [gifs, setGifs] = useState(null);
  useEffect(() => {
    const fetchingGifs = async () => {
      const newGifs = await fetchGifs();
      console.log("🚀 ~ fetchingGifs ~ newGifs:", newGifs);
      setGifs(newGifs.data);
    };
    fetchingGifs();
  }, []);

  return (
    <div>
      <Grid className="w-" width={2} columns={4} fetchGifs={fetchGifs} />
    </div>
  );
};

export default GifsLayout;
