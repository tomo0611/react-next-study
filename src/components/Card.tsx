"use client";

import { Work } from "@/models/Work";
import Image from "next/image";

export default function Card({ work }: { work: Work }) {
  function handleClick(work: Work) {
    alert("You liked : " + work.workInfo.workTitle + "!");
  }

  return (
    <div
      onClick={() => {
        alert("You clicked : " + work.workInfo.workTitle + "!");
      }}
      style={{
        border: "1px solid #ccc",
      }}
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
        {work.workInfo.favoriteCount}
      </button>
    </div>
  );
}
