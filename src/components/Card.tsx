"use client";

import { useState } from "react";
import { Work } from "@/models/Work";
import Image from "next/image";

export default function Card({ work }: { work: Work }) {
  function handleClick(work: Work) {
    // alert("You liked : " + work.workInfo.workTitle + "!");
    setFavoriteCount(favoriteCount + 1);
  }

  const [favoriteCount, setFavoriteCount] = useState(
    work.workInfo.favoriteCount
  );

  return (
    <div
      onClick={() => {
        alert("You clicked : " + work.workInfo.workTitle + "!");
      }}
      className="p-4 border-2 border-gray-200 rounded-lg"
    >
      <Image
        src={work.workInfo.mainKeyVisualPath}
        alt={work.workInfo.mainKeyVisualAlt}
        width={640 / 2}
        height={360 / 2}
      />
      <p>{work.workInfo.workTitle}</p>

      <span>気になる：</span>
      <button
        onClick={(e) => {
          // prevent an event from reaching parent components
          e.stopPropagation();
          handleClick(work);
        }}
      >
        {favoriteCount}
      </button>
    </div>
  );
}
